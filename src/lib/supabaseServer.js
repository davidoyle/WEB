import { createClient } from '@supabase/supabase-js'

let supabaseAdminClient

// Server-side Supabase instance — uses service role key and should only be imported in API routes or server-side code
export function getSupabaseServerClient() {
  if (supabaseAdminClient) return supabaseAdminClient

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Supabase server environment variables are missing.')
  }

  supabaseAdminClient = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  return supabaseAdminClient
}
