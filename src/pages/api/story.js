import { Resend } from 'resend'
import { supabase } from '../../lib/supabaseClient'

const resend = new Resend(process.env.RESEND_API_KEY)
const notifyEmail = process.env.NOTIFY_EMAIL || 'dxddoyle@gmail.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
    return res.status(500).json({ ok: false, error: 'Supabase environment variables are missing.' })
  }

  try {
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
      name,
      phone,
      email,
      postal_code: postalCode,
      incident_month_year: incidentMonthYear,
      issue_tags: issueTags || [],
      story,
      public_permission: publicPermission,
      consent: !!consent,
    })

    if (insertError) throw insertError

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
    return res.status(500).json({ ok: false, error: 'Server error' })
  }
}
