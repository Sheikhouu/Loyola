import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug des variables d'environnement en production
console.log('🔍 Debug variables d\'environnement Supabase:')
console.log('VITE_SUPABASE_URL:', supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'undefined')
console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 30)}...` : 'undefined')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables d\'environnement Supabase manquantes!')
  console.error('VITE_SUPABASE_URL présent:', !!supabaseUrl)
  console.error('VITE_SUPABASE_ANON_KEY présent:', !!supabaseAnonKey)
  console.warn('Mode fallback activé - fonctionnalités limitées')
} else {
  console.log('✅ Variables d\'environnement Supabase correctement chargées')
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  },
  global: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  },
  db: {
    schema: 'public'
  }
}) : null

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