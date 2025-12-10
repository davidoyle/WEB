// src/pages/api/story.js
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { logError, logRequest, logResponse } from '@/lib/apiLogger';

const notifyEmail = process.env.NOTIFY_EMAIL || 'dxddoyle@gmail.com';

function safeLog(logger, ...args) {
  try {
    return logger(...args);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('log_failed', err);
    return null;
  }
}

export default async function handler(req, res) {
  const requestId = safeLog(logRequest, req) || 'n/a';

  // Allow preflight quickly and gate other methods
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST');
    safeLog(logResponse, requestId, 200, { info: 'preflight' });
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    safeLog(logResponse, requestId, 405, { error: 'Method not allowed' });
    return res
      .status(405)
      .json({ ok: false, error: 'Method not allowed', method: req.method });
  }

  const contentType = req.headers['content-type'] || '';
  if (!contentType.includes('application/json')) {
    safeLog(logResponse, requestId, 400, { error: 'Invalid content type' });
    return res.status(400).json({
      ok: false,
      error: 'Content-Type must be application/json',
    });
  }

  // Pull Supabase env vars
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    safeLog(logResponse, requestId, 500, { error: 'Missing Supabase env vars' });
    return res.status(500).json({
      ok: false,
      error: 'Supabase server environment variables are missing.',
    });
  }

  // Create server-side Supabase client
  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  let resend = null;
  if (process.env.RESEND_API_KEY) {
    try {
      resend = new Resend(process.env.RESEND_API_KEY);
    } catch (initError) {
      safeLog(logError, requestId, initError, { step: 'init_resend' });
    }
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
    } = req.body || {};

    if (!incidentMonthYear || !story || !consent) {
      safeLog(logResponse, requestId, 400, { error: 'Missing required fields' });
      return res.status(400).json({
        ok: false,
        error: 'Missing required fields: month/year of incident or decision, story, and consent.',
      });
    }

    const { data, error: insertError } = await supabase
      .from('stories')
      .insert({
        full_name: name || null,
        phone,
        email: email || null,
        postal_code: postalCode,
        incident_month_year: incidentMonthYear,
        issue_tags: issueTags || [],
        story,
        public_permission:
          publicPermission === true || publicPermission === 'public',
        consent: !!consent,
      })
      .select()
      .single();

    if (insertError) {
      safeLog(logError, requestId, insertError, { step: 'insert_story' });
      safeLog(logResponse, requestId, 500, {
        error: insertError.message,
        step: 'insert_story',
      });
      return res.status(500).json({
        ok: false,
        error: insertError.message,
        meta: { step: 'insert_story' },
      });
    }

    if (resend) {
      try {
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
        });
      } catch (emailError) {
        safeLog(logError, requestId, emailError, { step: 'send_email' });
      }
    }

    safeLog(logResponse, requestId, 200, { storyId: data?.id ?? null });
    return res.status(200).json({ ok: true, storyId: data?.id ?? null });
  } catch (err) {
    safeLog(logError, requestId, err);
    safeLog(logResponse, requestId, 500, { error: err?.message });
    return res.status(500).json({
      ok: false,
      error: err?.message || 'Internal server error',
    });
  }
}
