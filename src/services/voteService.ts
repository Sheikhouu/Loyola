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
      
      const { data, error } = await supabase
        .from('votes')
        .select('priority_id, vote_type')
        .eq('fingerprint', fp);
        
      if (error) throw error;
      
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
    if (!supabase) return {};
    
    try {
      // D'abord essayer de récupérer depuis vote_stats
      const { data: statsData, error: statsError } = await supabase
        .from('vote_stats')
        .select('*');
        
      if (!statsError && statsData && statsData.length > 0) {
        // Si vote_stats contient des données, les utiliser
        const stats: { [priorityId: string]: { upvotes: number; downvotes: number } } = {};
        statsData.forEach((stat: VoteStats) => {
          stats[stat.priority_id] = {
            upvotes: stat.upvotes,
            downvotes: stat.downvotes
          };
        });
        return stats;
      }
      
      // Fallback : calculer les stats à partir de la table votes
      console.log('Table vote_stats vide ou inexistante, calcul des stats depuis votes...');
      const { data: votesData, error: votesError } = await supabase
        .from('votes')
        .select('priority_id, vote_type');
        
      if (votesError) throw votesError;
      
      // Calculer les statistiques manuellement
      const stats: { [priorityId: string]: { upvotes: number; downvotes: number } } = {};
      votesData?.forEach(vote => {
        if (!stats[vote.priority_id]) {
          stats[vote.priority_id] = { upvotes: 0, downvotes: 0 };
        }
        if (vote.vote_type === 'up') {
          stats[vote.priority_id].upvotes++;
        } else if (vote.vote_type === 'down') {
          stats[vote.priority_id].downvotes++;
        }
      });
      
      return stats;
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
      return {};
    }
  }
  
  // Écouter les changements de votes en temps réel
  static subscribeToVoteChanges(callback: (stats: { [priorityId: string]: { upvotes: number; downvotes: number } }) => void) {
    if (!supabase) {
      console.warn('Client Supabase non disponible, mode hors ligne activé');
      return { unsubscribe: () => {} };
    }
    
    try {
      const subscription = supabase
        .channel('vote_changes')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'votes'
        }, async () => {
          try {
            // Récupérer les nouvelles stats quand il y a un changement
            const stats = await this.getVoteStats();
            callback(stats);
          } catch (error) {
            console.warn('Erreur lors de la mise à jour des stats:', error);
          }
        })
        .subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            console.log('Subscription temps réel activée');
          } else if (status === 'CHANNEL_ERROR') {
            console.warn('Erreur de subscription temps réel, mode polling activé');
            // Fallback : polling toutes les 10 secondes
            const interval = setInterval(async () => {
              try {
                const stats = await this.getVoteStats();
                callback(stats);
              } catch (error) {
                console.warn('Erreur lors du polling:', error);
              }
            }, 10000);
            
            // Retourner un objet qui permet d'arrêter le polling
            return {
              unsubscribe: () => {
                clearInterval(interval);
              }
            };
          }
        });
        
      return subscription;
    } catch (error) {
      console.warn('Erreur lors de la création de la subscription, mode polling activé:', error);
      
      // Fallback : polling toutes les 10 secondes
      const interval = setInterval(async () => {
        try {
          const stats = await this.getVoteStats();
          callback(stats);
        } catch (error) {
          console.warn('Erreur lors du polling:', error);
        }
      }, 10000);
      
      return {
        unsubscribe: () => {
          clearInterval(interval);
        }
      };
    }
  }
}