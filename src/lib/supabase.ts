import { createClient } from '@supabase/supabase-js'

// Public (publishable/anon) key — safe to expose in the browser bundle.
// Row Level Security policies on the `publications` table restrict what
// this key can actually do:
//   - INSERT is allowed, but only with status = 'pending'
//   - SELECT is allowed, but only rows with status = 'approved'
// There is no service_role key here on purpose — approving a submission
// is done by hand in the Supabase Table Editor (which authenticates as
// you, the project owner, and bypasses RLS), not from application code.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export type PublicationRow = {
  id: string
  title: string
  author: string
  email: string
  type: string
  outlet: string | null
  href: string | null
  file_url: string | null
  excerpt: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
}
