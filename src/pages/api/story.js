// src/pages/api/story.js
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ ok: false, error: 'Method not allowed', method: req.method });
  }

  const contentType = req.headers['content-type'] || '';
  if (!contentType.includes('application/json')) {
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

    if (!name || !email || !story || !consent) {
      return res.status(400).json({
        ok: false,
        error: 'Missing required fields: name, email, story, or consent.',
      });
    }

    const { data, error: insertError } = await supabase
      .from('stories')
      .insert({
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
      .select()
      .single();

    if (insertError) {
      return res.status(500).json({
        ok: false,
        error: insertError.message,
        meta: { step: 'insert_story' },
      });
    }

    return res.status(200).json({ ok: true, storyId: data?.id ?? null });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err?.message || 'Internal server error',
    });
  }
}
