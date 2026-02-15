import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { logError, logRequest, logResponse } from '@/lib/apiLogger';

const notifyEmail = process.env.NOTIFY_EMAIL || 'dxddoyle@gmail.com';

function safeLog(logger, ...args) {
  try {
    return logger(...args);
  } catch (err) {
    console.error('log_failed', err);
    return null;
  }
}

export async function POST(request) {
  const requestId = safeLog(logRequest, request) || 'n/a';
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    safeLog(logResponse, requestId, 400, { error: 'Invalid content type' });
    return NextResponse.json(
      { ok: false, error: 'Content-Type must be application/json' },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    safeLog(logResponse, requestId, 500, { error: 'Missing Supabase env vars' });
    return NextResponse.json(
      { ok: false, error: 'Supabase server environment variables are missing.' },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
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
    const body = await request.json();
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
    } = body || {};

    if (!incidentMonthYear || !story || !consent) {
      safeLog(logResponse, requestId, 400, { error: 'Missing required fields' });
      return NextResponse.json(
        {
          ok: false,
          error: 'Missing required fields: month/year of incident or decision, story, and consent.',
        },
        { status: 400 }
      );
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
        public_permission: publicPermission === true || publicPermission === 'public',
        consent: !!consent,
      })
      .select()
      .single();

    if (insertError) {
      safeLog(logError, requestId, insertError, { step: 'insert_story' });
      return NextResponse.json(
        { ok: false, error: insertError.message, meta: { step: 'insert_story' } },
        { status: 500 }
      );
    }

    if (resend) {
      try {
        await resend.emails.send({
          from: 'WorkersToolkit <onboarding@resend.dev>',
          to: notifyEmail,
          subject: 'New Story Submitted',
          text: `New Story Submitted\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nPostal Code: ${postalCode || 'N/A'}\nIncident Month/Year: ${incidentMonthYear || 'N/A'}\nIssue Tags: ${(issueTags || []).join(', ')}\nPublic Permission: ${publicPermission || 'N/A'}\n\nStory:\n${story}`,
        });
      } catch (emailError) {
        safeLog(logError, requestId, emailError, { step: 'send_email' });
      }
    }

    safeLog(logResponse, requestId, 200, { storyId: data?.id ?? null });
    return NextResponse.json({ ok: true, storyId: data?.id ?? null }, { status: 200 });
  } catch (err) {
    safeLog(logError, requestId, err);
    return NextResponse.json(
      { ok: false, error: err?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: { Allow: 'POST' } });
}
