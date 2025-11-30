export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, story, consent } = req.body || {};
  const validationErrors = {};

  if (!name) validationErrors.name = 'Name is required';
  if (!email) validationErrors.email = 'Email is required';
  if (!story) validationErrors.story = 'Story is required';
  if (consent !== true) validationErrors.consent = 'Consent is required';

  if (Object.keys(validationErrors).length > 0) {
    return res.status(400).json({ ok: false, errors: validationErrors });
  }

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
