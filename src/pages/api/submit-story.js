import { createClient } from '@supabase/supabase-js';
import sgMail from '@sendgrid/mail';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const sendgridApiKey = process.env.SENDGRID_API_KEY;
const storiesInbox = process.env.STORIES_INBOX;
const fromEmail = process.env.FROM_EMAIL;

const supabase = supabaseUrl && supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : null;

if (sendgridApiKey) {
  sgMail.setApiKey(sendgridApiKey);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

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
  } = req.body || {};

  const { name, email, story, consent } = req.body || {};
  const validationErrors = {};

  if (!name) validationErrors.name = 'Name is required';
  if (!email) validationErrors.email = 'Email is required';
  if (!incidentMonthYear) validationErrors.incidentMonthYear = 'Incident month/year is required';
  if (!story) validationErrors.story = 'Story is required';
  if (consent !== true) validationErrors.consent = 'Consent is required';

  if (Object.keys(validationErrors).length > 0) {
    return res.status(400).json({ ok: false, errors: validationErrors });
  }

  if (!supabase) {
    return res.status(500).json({ ok: false, error: 'Database configuration is missing' });
  }

  if (!sendgridApiKey || !storiesInbox || !fromEmail) {
    return res.status(500).json({ ok: false, error: 'Email configuration is missing' });
  }

  try {
    const { error: dbError } = await supabase.from('stories').insert([
      {
        name,
        phone,
        email,
        postal_code: postalCode || null,
        incident_month_year: incidentMonthYear,
        issue_tags: Array.isArray(issueTags) ? issueTags : [],
        story,
        public_permission: publicPermission || 'private',
        consent,
      },
    ]);

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return res.status(502).json({ ok: false, error: 'Failed to store submission' });
    }

    const msg = {
      to: storiesInbox,
      from: fromEmail,
      subject: `New worker story from ${name}`,
      text: `Name: ${name}
Phone: ${phone || 'N/A'}
Email: ${email}
Postal code: ${postalCode || 'N/A'}
Month/Year: ${incidentMonthYear}
Issue tags: ${(Array.isArray(issueTags) ? issueTags : []).join(', ') || 'None provided'}

Public permission: ${publicPermission || 'private'}

Story:
${story}`,
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('submit-story error:', error);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  const {
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    RESEND_API_KEY,
    MAINTAINER_INBOX,
    EMAIL_FROM_ADDRESS,
  } = process.env;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return res.status(500).json({
      ok: false,
      error: 'Database configuration is missing',
    });
  }

  if (!RESEND_API_KEY || !MAINTAINER_INBOX || !EMAIL_FROM_ADDRESS) {
    return res.status(500).json({
      ok: false,
      error: 'Email configuration is missing',
    });
  }

  try {
    const dbResponse = await fetch(`${SUPABASE_URL}/rest/v1/stories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: 'return=representation',
      },
      body: JSON.stringify({ name, email, story, consent }),
    });

    if (!dbResponse.ok) {
      const errorText = await dbResponse.text();
      return res.status(502).json({
        ok: false,
        error: 'Failed to store submission',
        details: errorText,
      });
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: EMAIL_FROM_ADDRESS,
        to: MAINTAINER_INBOX,
        subject: 'New story submission received',
        text: `New story submitted by ${name} (${email}).\n\n${story}`,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      return res.status(502).json({
        ok: false,
        error: 'Failed to send notification email',
        details: errorText,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
}
