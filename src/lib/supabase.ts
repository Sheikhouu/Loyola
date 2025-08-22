import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug des variables d'environnement en production
console.log('🔍 Debug variables d\'environnement Supabase:')
console.log('VITE_SUPABASE_URL:', supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'undefined')
console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 30)}...` : 'undefined')

// Vérification critique de la clé
if (supabaseAnonKey) {
  console.log('🔐 Longueur de la clé:', supabaseAnonKey.length)
  console.log('🔐 Commence par eyJ:', supabaseAnonKey.startsWith('eyJ'))
  console.log('🔐 Contient des points:', (supabaseAnonKey.match(/\./g) || []).length)
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables d\'environnement Supabase manquantes!')
  console.error('VITE_SUPABASE_URL présent:', !!supabaseUrl)
  console.error('VITE_SUPABASE_ANON_KEY présent:', !!supabaseAnonKey)
  console.warn('Mode fallback activé - fonctionnalités limitées')
} else {
  console.log('✅ Variables d\'environnement Supabase correctement chargées')
}


// Fonction de test de connectivité avec retry
export const testSupabaseConnection = async (retries = 3): Promise<boolean> => {
  if (!supabase) {
    console.error('❌ Client Supabase non initialisé')
    return false
  }
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`🔍 Test de connectivité Supabase (tentative ${attempt}/${retries})...`)
      
      // Test simple avec une requête vers une table publique
      const { data, error } = await supabase
        .from('votes')
        .select('id')
        .limit(1)
      
      if (error) {
        console.error(`❌ Erreur tentative ${attempt}:`, error.message)
        if (attempt === retries) {
          console.error('Code:', error.code)
          console.error('Détails:', error.details)
          return false
        }
        // Attendre avant de réessayer
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
        continue
      }
      
      console.log('✅ Connectivité Supabase réussie')
      return true
    } catch (error) {
      console.error(`❌ Exception tentative ${attempt}:`, error)
      if (attempt === retries) return false
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
    }
  }
  
  return false
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false
  },
  global: {
    headers: {
      'X-Client-Info': 'loyola-vote-app'
    }
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