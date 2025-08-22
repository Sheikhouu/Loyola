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

// Fonction de test de connectivité
export const testSupabaseConnection = async () => {
  if (!supabase) {
    console.error('❌ Client Supabase non initialisé')
    return false
  }
  
  try {
    console.log('🔍 Test de connectivité Supabase...')
    
    // Test simple avec une requête vers une table publique
    const { data, error } = await supabase
      .from('votes')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Erreur de connectivité Supabase:', error)
      console.error('Code:', error.code)
      console.error('Message:', error.message)
      console.error('Détails:', error.details)
      return false
    }
    
    console.log('✅ Connectivité Supabase réussie')
    return true
  } catch (error) {
    console.error('❌ Exception lors du test de connectivité:', error)
    return false
  }
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  },
  global: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`
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