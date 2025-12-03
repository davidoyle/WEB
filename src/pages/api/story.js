import { Resend } from 'resend'
// Keep this relative path in sync with src/lib/supabaseClient.js after moving the route under src/pages/api.
import { getSupabaseClient } from '../../lib/supabaseClient'

export const runtime = 'edge'

const resend = new Resend(process.env.RESEND_API_KEY)
const notifyEmail = process.env.NOTIFY_EMAIL || 'dxddoyle@gmail.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const supabase = getSupabaseClient()

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

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error in /api/story:', err)
    if (err.message === 'Supabase environment variables are missing.') {
      return res.status(500).json({ ok: false, error: err.message })
    }
    return res.status(500).json({ ok: false, error: err.message })
  }
}
