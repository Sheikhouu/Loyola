import { supabase, Vote, VoteStats } from '../lib/supabase';
import { generateFingerprint, getClientIP } from '../utils/fingerprint';

// Service pour gérer les votes
export class VoteService {
  
  // Soumettre un vote
  static async submitVote(priorityId: string, voteType: 'up' | 'down'): Promise<{ success: boolean; error?: string }> {
    if (!supabase) {
      return { success: false, error: 'Service de vote non disponible' };
    }
    
    try {
      const fingerprint = generateFingerprint();
      const userAgent = navigator.userAgent;
      
      // Vérifier si l'utilisateur a déjà voté pour cette priorité
      const existingVote = await this.getUserVote(priorityId, fingerprint);
      
      if (existingVote) {
        if (existingVote.vote_type === voteType) {
          // Retirer le vote (toggle)
          const { error } = await supabase
            .from('votes')
            .delete()
            .eq('id', existingVote.id);
            
          if (error) throw error;
          return { success: true };
        } else {
          // Changer le vote
          const { error } = await supabase
            .from('votes')
            .update({ 
              vote_type: voteType,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingVote.id);
            
          if (error) throw error;
          return { success: true };
        }
      } else {
        // Nouveau vote
        const { error } = await supabase
          .from('votes')
          .insert({
            priority_id: priorityId,
            vote_type: voteType,
            fingerprint,
            user_agent: userAgent,
            ip_address: await getClientIP()
          });
          
        if (error) throw error;
        return { success: true };
      }
    } catch (error) {
      console.error('Erreur lors du vote:', error);
      return { 
        success: false, 
        error: 'Erreur lors de l\'enregistrement du vote' 
      };
    }
  }
  
  // Récupérer le vote d'un utilisateur pour une priorité
  static async getUserVote(priorityId: string, fingerprint?: string): Promise<Vote | null> {
    if (!supabase) return null;
    
    try {
      const fp = fingerprint || generateFingerprint();
      
      const { data, error } = await supabase
        .from('votes')
        .select('*')
        .eq('priority_id', priorityId)
        .eq('fingerprint', fp)
        .single();
        
      if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération du vote:', error);
      return null;
    }
  }
  
  // Récupérer tous les votes de l'utilisateur
  static async getUserVotes(fingerprint?: string): Promise<{ [priorityId: string]: 'up' | 'down' }> {
    if (!supabase) return {};
    
    try {
      const fp = fingerprint || generateFingerprint();
      console.log('Tentative de récupération des votes utilisateur avec fingerprint:', fp);
      
      const { data, error } = await supabase
        .from('votes')
        .select('priority_id, vote_type')
        .eq('fingerprint', fp);
        
      if (error) {
        console.error('Erreur Supabase lors de la récupération des votes utilisateur:', error);
        console.error('Code d\'erreur:', error.code);
        console.error('Message d\'erreur:', error.message);
        console.error('Détails:', error.details);
        throw error;
      }
      
      console.log('Votes utilisateur récupérés avec succès:', data);
      
      const userVotes: { [priorityId: string]: 'up' | 'down' } = {};
      data?.forEach(vote => {
        userVotes[vote.priority_id] = vote.vote_type;
      });
      
      return userVotes;
    } catch (error) {
      console.error('Erreur lors de la récupération des votes utilisateur:', error);
      return {};
    }
  }
  
  // Récupérer les statistiques de tous les votes
  static async getVoteStats(): Promise<{ [priorityId: string]: { upvotes: number; downvotes: number } }> {
    if (!supabase) {
      console.error('❌ Client Supabase non disponible dans getVoteStats')
      return {};
    }
    
    try {
      console.log('🔍 Tentative de récupération des statistiques de votes...');
      console.log('Client Supabase état:', !!supabase);
      
      // Intercepter la requête pour voir les en-têtes
      const originalFetch = window.fetch;
      window.fetch = async (...args) => {
        console.log('🌐 Requête interceptée:', args[0]);
        if (args[1] && args[1].headers) {
          console.log('📋 En-têtes de la requête:', args[1].headers);
        }
        const result = await originalFetch(...args);
        console.log('📊 Statut de la réponse:', result.status);
        return result;
      };
      
      const { data, error } = await supabase
        .from('vote_stats')
        .select('*');
        
      // Restaurer fetch original
      window.fetch = originalFetch;
        
      if (error) {
        console.error('Erreur Supabase lors de la récupération des stats:', error);
        console.error('Code d\'erreur:', error.code);
        console.error('Message d\'erreur:', error.message);
        console.error('Détails:', error.details);
        throw error;
      }
      
      console.log('Statistiques récupérées avec succès:', data);
      
      const stats: { [priorityId: string]: { upvotes: number; downvotes: number } } = {};
      data?.forEach((stat: VoteStats) => {
        stats[stat.priority_id] = {
          upvotes: stat.upvotes,
          downvotes: stat.downvotes
        };
      });
      
      return stats;
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
      
      // Fallback : calculer les stats depuis la table votes
      console.log('Tentative de fallback : calcul des stats depuis la table votes...');
      try {
        const { data: votesData, error: votesError } = await supabase
          .from('votes')
          .select('priority_id, vote_type');
          
        if (votesError) {
          console.error('Erreur lors du fallback:', votesError);
          return {};
        }
        
        // Calculer les stats manuellement
        const manualStats: { [priorityId: string]: { upvotes: number; downvotes: number } } = {};
        votesData?.forEach(vote => {
          if (!manualStats[vote.priority_id]) {
            manualStats[vote.priority_id] = { upvotes: 0, downvotes: 0 };
          }
          if (vote.vote_type === 'up') {
            manualStats[vote.priority_id].upvotes++;
          } else {
            manualStats[vote.priority_id].downvotes++;
          }
        });
        
        console.log('Stats calculées manuellement:', manualStats);
        return manualStats;
      } catch (fallbackError) {
        console.error('Erreur lors du fallback:', fallbackError);
        return {};
      }
    }
  }
  
  // Écouter les changements de votes en temps réel
  static subscribeToVoteChanges(callback: (stats: { [priorityId: string]: { upvotes: number; downvotes: number } }) => void) {
    if (!supabase) {
      return { unsubscribe: () => {} };
    }
    
    const subscription = supabase
      .channel('vote_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'votes'
      }, async () => {
        // Récupérer les nouvelles stats quand il y a un changement
        const stats = await this.getVoteStats();
        callback(stats);
      })
      .subscribe();
      
    return subscription;
  }
}