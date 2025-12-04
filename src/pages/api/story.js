import { Resend } from 'resend'
import { logError, logRequest, logResponse } from '@/lib/apiLogger'
import { getSupabaseServerClient } from '@/lib/supabaseServer'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)
const notifyEmail = process.env.NOTIFY_EMAIL || 'dxddoyle@gmail.com'

export default async function handler(req, res) {
  const requestId = logRequest(req)

  if (req.method !== 'POST') {
    logResponse(requestId, 405, { error: 'Method not allowed' })
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const contentType = req.headers['content-type'] || ''
  if (!contentType.includes('application/json')) {
    logResponse(requestId, 400, { error: 'Invalid content type' })
    return res.status(400).json({ ok: false, error: 'Content-Type must be application/json' })
  }

  try {
    const supabase = getSupabaseServerClient()

    const {
      name,
      phone,
      email,
      postalCode,
      incidentMonthYear,
      issueTags,
      story,
      publicPermission,
      consent,
    } = req.body || {}

    if (!name || !email || !story || !consent) {
      logResponse(requestId, 400, { error: 'Missing required fields' })
      return res.status(400).json({
        ok: false,
        error: 'Missing required fields: name, email, story, or consent.',
      })
    }

    const { error: insertError } = await supabase.from('stories').insert({
      full_name: name,
      phone,
      email,
      postal_code: postalCode,
      incident_month_year: incidentMonthYear,
      issue_tags: issueTags || [],
      story,
      public_permission: publicPermission,
      consent: !!consent,
    })

    if (insertError) {
      logError(requestId, insertError, { step: 'insert_story' })
      return res.status(500).json({ ok: false, error: insertError.message })
    }

    await resend.emails.send({
      from: 'WorkersToolkit <onboarding@resend.dev>',
      to: notifyEmail,
      subject: 'New Story Submitted',
      text: `
New Story Submitted
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Postal Code: ${postalCode || 'N/A'}
Incident Month/Year: ${incidentMonthYear || 'N/A'}
Issue Tags: ${(issueTags || []).join(', ')}
Public Permission: ${publicPermission || 'N/A'}

Story:
${story}
      `,
    })

    logResponse(requestId, 200, { ok: true })
    return res.status(200).json({ ok: true })
  } catch (err) {
    logError(requestId, err)
    const message = err?.message || 'Internal server error'
    return res.status(500).json({ ok: false, error: message })
  }
}
