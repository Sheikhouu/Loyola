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

// Test direct de l'API Supabase avec fetch
export const testDirectSupabaseAPI = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Variables Supabase manquantes pour test direct')
    return false
  }
  
  try {
    console.log('🔍 Test direct API Supabase avec fetch...')
    
    const response = await fetch(`${supabaseUrl}/rest/v1/votes?select=count&limit=1`, {
      method: 'GET',
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    
    console.log('📊 Statut de la réponse directe:', response.status)
    console.log('📋 En-têtes envoyés:', {
      'apikey': supabaseAnonKey.substring(0, 20) + '...',
      'Authorization': `Bearer ${supabaseAnonKey.substring(0, 20)}...`
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ Erreur API directe:', response.status, errorText)
      return false
    }
    
    const data = await response.json()
    console.log('✅ Test API direct réussi:', data)
    return true
  } catch (error) {
    console.error('❌ Exception lors du test API direct:', error)
    return false
  }
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

// Créer le client Supabase avec configuration minimale
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Variables Supabase manquantes pour créer le client')
    return null
  }
  
  console.log('🔧 Création du client Supabase...')
  console.log('URL:', supabaseUrl)
  console.log('Key (premiers chars):', supabaseAnonKey.substring(0, 20) + '...')
  
  try {
    const client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    })
    
    console.log('✅ Client Supabase créé avec succès')
    return client
  } catch (error) {
    console.error('❌ Erreur lors de la création du client Supabase:', error)
    return null
  }
}

export const supabase = createSupabaseClient()

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