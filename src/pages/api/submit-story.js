// src/pages/api/submit-story.js

import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge'; // 👈 required by Cloudflare next-on-pages

// Helper: create Supabase client (Edge-compatible)
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      'Supabase environment variables are missing. ' +
        'Expected NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.'
    );
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
    },
  });
}

// Helper: send notification email via SendGrid using fetch (no Node-only libs)
async function sendNotificationEmail({ storyText, workerName, workerEmail }) {
  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  const sendgridTo = process.env.SENDGRID_TO_EMAIL || workerEmail;
  const sendgridFrom = process.env.SENDGRID_FROM_EMAIL || 'no-reply@workers-toolkit.example';

  if (!sendgridApiKey || !sendgridTo || !sendgridFrom) {
    // Don’t hard-fail the whole request if email isn’t configured
    console.warn('SendGrid env vars missing; skipping email notification.');
    return;
  }

  const subject = 'New Worker Story Submission';
  const contentLines = [
    'New story submitted from Worker’s Toolkit:',
    '',
    workerName ? `Name: ${workerName}` : 'Name: (not provided)',
    workerEmail ? `Email: ${workerEmail}` : 'Email: (not provided)',
    '',
    'Story:',
    storyText || '(no text provided)',
  ];

  const body = {
    personalizations: [
      {
        to: [{ email: sendgridTo }],
        subject,
      },
    ],
    from: { email: sendgridFrom, name: "Worker's Toolkit" },
    content: [
      {
        type: 'text/plain',
        value: contentLines.join('\n'),
      },
    ],
  };

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sendgridApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.warn('SendGrid send failed', res.status, text);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    // Next.js will have parsed JSON body already
    const { storyText, name, email, consentToContact, context } = req.body || {};

    if (!storyText || typeof storyText !== 'string' || !storyText.trim()) {
      return res.status(400).json({ ok: false, error: 'Missing story text.' });
    }

    const supabase = getSupabaseClient();

    // Adjust table/columns to match your Supabase schema
    const { data, error } = await supabase
      .from('stories')
      .insert({
        story_text: storyText,
        name: name || null,
        email: email || null,
        consent_to_contact: !!consentToContact,
        context: context || null,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error', error);
      return res
        .status(500)
        .json({ ok: false, error: 'Failed to save story. Please try again later.' });
    }

    // Fire-and-forget email notification
    try {
      await sendNotificationEmail({
        storyText,
        workerName: name,
        workerEmail: email,
      });
    } catch (emailErr) {
      console.warn('Error sending notification email', emailErr);
      // Do not fail the request just because email failed
    }

    return res.status(200).json({
      ok: true,
      id: data.id,
    });
  } catch (err) {
    console.error('Unhandled error in /api/submit-story', err);
    return res.status(500).json({
      ok: false,
      error: 'Unexpected error submitting story.',
    });
  }
}
