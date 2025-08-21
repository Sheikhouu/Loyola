import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variables d\'environnement Supabase manquantes')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour TypeScript
export interface Vote {
  id: string
  priority_id: string
  vote_type: 'up' | 'down'
  fingerprint: string
  ip_address?: string
  user_agent?: string
  created_at: string
  updated_at: string
}

export interface VoteStats {
  priority_id: string
  upvotes: number
  downvotes: number
  total_votes: number
}