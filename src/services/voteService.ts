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
        .select('id, priority_id, vote_type, fingerprint, created_at, updated_at')
        .eq('priority_id', priorityId)
        .eq('fingerprint', fp)
        .maybeSingle();
        
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
    if (!supabase) {
      console.error('❌ Client Supabase non disponible dans getVoteStats')
      return {};
    }
    
    try {
      const { data, error } = await supabase
        .from('vote_stats')
        .select('priority_id, upvotes, downvotes, total_votes');
        
      if (error) throw error;
      
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
      
      return {};
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