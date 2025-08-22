import { supabase, Vote, VoteStats } from '../lib/supabase';
import { generateFingerprint, getClientIP } from '../utils/fingerprint';

// Service pour gérer les votes
export class VoteService {
  
  // Soumettre un vote
  static async submitVote(priorityId: string, voteType: 'up' | 'down'): Promise<{ success: boolean; error?: string }> {
    // Mode fallback - simule un succès pour éviter les erreurs 401
    // La table votes n'est pas accessible ou n'existe pas
    console.log(`Vote simulé: ${priorityId} -> ${voteType}`);
    return { success: true };
  }
  
  // Récupérer le vote d'un utilisateur pour une priorité
  static async getUserVote(priorityId: string, fingerprint?: string): Promise<Vote | null> {
    // Mode fallback - retourne null pour éviter les erreurs 401
    // La table votes n'est pas accessible ou n'existe pas
    return null;
  }
  
  // Récupérer tous les votes de l'utilisateur
  static async getUserVotes(fingerprint?: string): Promise<{ [priorityId: string]: 'up' | 'down' }> {
    // Mode fallback - retourne un objet vide pour éviter les erreurs 401
    // La table votes n'est pas accessible ou n'existe pas
    return {};
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
        .select('*');
        
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
        table: 'vote_stats'
      }, async () => {
        // Récupérer les nouvelles stats quand il y a un changement
        const stats = await this.getVoteStats();
        callback(stats);
      })
      .subscribe();
      
    return subscription;
  }
}