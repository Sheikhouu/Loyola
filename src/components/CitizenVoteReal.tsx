import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { VoteService } from '../services/voteService';

interface PriorityItem {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
  category: 'urgent' | 'important' | 'nice-to-have';
}

interface UserVotes {
  [priorityId: string]: 'up' | 'down' | null;
}

const PriorityCard = ({ 
  item, 
  onVote, 
  userVote, 
  hasVoted,
  isLoading
}: { 
  item: PriorityItem; 
  onVote: (id: string, vote: 'up' | 'down') => Promise<void>;
  userVote: 'up' | 'down' | null;
  hasVoted: boolean;
  isLoading: boolean;
}) => {
  const totalVotes = item.upvotes - item.downvotes;
  const votePercentage = item.upvotes + item.downvotes > 0 
    ? Math.round((item.upvotes / (item.upvotes + item.downvotes)) * 100) 
    : 0;

  const isUpvoted = userVote === 'up';
  const isDownvoted = userVote === 'down';

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#330066]">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-[#330066] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 sm:mb-0" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
          <button
            onClick={() => onVote(item.id, 'up')}
            disabled={isLoading}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 ${
              isUpvoted 
                ? 'bg-green-500 text-white' 
                : isLoading
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-green-100 hover:bg-green-200 text-green-700'
            }`}
          >
            <span className="text-sm sm:text-base">👍</span>
            <span className="font-semibold text-sm sm:text-base">{item.upvotes}</span>
          </button>
          
          <button
            onClick={() => onVote(item.id, 'down')}
            disabled={isLoading}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 ${
              isDownvoted 
                ? 'bg-red-500 text-white' 
                : isLoading
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-red-100 hover:bg-red-200 text-red-700'
            }`}
          >
            <span className="text-sm sm:text-base">👎</span>
            <span className="font-semibold text-sm sm:text-base">{item.downvotes}</span>
          </button>
        </div>

        <div className="text-center sm:text-right">
          <div className="text-xl sm:text-2xl font-bold text-[#330066]">{totalVotes}</div>
          <div className="text-xs sm:text-sm text-gray-500">
            {votePercentage}% d'approbation
          </div>
          {hasVoted && (
            <div className="text-xs text-blue-600 mt-1">
              ✓ Vous avez voté
            </div>
          )}
          {isLoading && (
            <div className="text-xs text-orange-600 mt-1">
              ⏳ Enregistrement...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CitizenVoteReal = () => {
  const { language } = useLanguage();
  
  // Données de base des priorités (sans votes)
  const basePriorities: Omit<PriorityItem, 'upvotes' | 'downvotes'>[] = [
    {
      id: 'sports-infrastructure',
      title: language === 'fr' ? 'Infrastructure sportives' : 'Sports infrastructure',
      description: language === 'fr'
        ? 'Construction de nouvelles installations sportives ( soccer, basketball, hockey, etc. )'
        : 'Construction of new sports facilities (soccer, basketball, hockey, etc.)',
      category: 'important'
    },
    {
      id: 'road-safety',
      title: language === 'fr' ? 'Sécurité routière' : 'Road safety',
      description: language === 'fr'
        ? 'Mesures pour ralentir la vitesse, diminuer le risque aux intersections'
        : 'Measures to reduce speed and decrease risk at intersections',
      category: 'urgent'
    },
    {
      id: 'revitalize-commercial-streets',
      title: language === 'fr' ? 'Re-dynamiser les artères commerçantes' : 'Revitalize commercial streets',
      description: language === 'fr'
        ? 'Investir sur Sherbrooke et Somerled pour attirer et maintenir plus de commerçants locaux'
        : 'Invest in Sherbrooke and Somerled to attract and retain more local businesses',
      category: 'important'
    },
    {
      id: 'parks',
      title: language === 'fr' ? 'Parcs' : 'Parks',
      description: language === 'fr'
        ? 'Investir et mieux maintenir nos parcs existants'
        : 'Invest in and better maintain our existing parks',
      category: 'important'
    },
    {
      id: 'city-interface',
      title: language === 'fr' ? 'Interface avec la ville' : 'Interface with the city',
      description: language === 'fr'
        ? 'Rendre plus efficaces et plus rapides les interactions avec la Ville et l\'arrondissement pour les services.'
        : 'Make interactions with the City and the borough more efficient and faster for services.',
      category: 'important'
    },
    {
      id: 'control-spending',
      title: language === 'fr' ? 'Contrôler les dépenses' : 'Control spending',
      description: language === 'fr'
        ? 'Ne plus alourdir le fardeaux financier des résidents en contrôlant les dépenses de la Ville'
        : "Avoid further burdening residents' finances by controlling City spending",
      category: 'urgent'
    }
  ];

  const [priorities, setPriorities] = useState<PriorityItem[]>([]);
  const [userVotes, setUserVotes] = useState<UserVotes>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Charger les données initiales
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsInitialLoading(true);
        
        // Charger les statistiques et les votes utilisateur en parallèle
        const [voteStats, userVotesData] = await Promise.all([
          VoteService.getVoteStats(),
          VoteService.getUserVotes()
        ]);
        
        // Construire les priorités avec les votes
        const prioritiesWithVotes = basePriorities.map(priority => ({
          ...priority,
          upvotes: voteStats[priority.id]?.upvotes || 0,
          downvotes: voteStats[priority.id]?.downvotes || 0
        }));
        
        setPriorities(prioritiesWithVotes);
        setUserVotes(userVotesData);
        
        // S'abonner aux changements en temps réel
        const subscription = VoteService.subscribeToVoteChanges((newStats) => {
          setPriorities(prev => prev.map(priority => ({
            ...priority,
            upvotes: newStats[priority.id]?.upvotes || 0,
            downvotes: newStats[priority.id]?.downvotes || 0
          })));
        });
        
        // Cleanup subscription on unmount
        return () => {
          subscription.unsubscribe();
        };
        
      } catch (error) {
        console.error('Erreur lors du chargement initial:', error);
      } finally {
        setIsInitialLoading(false);
      }
    };
    
    loadInitialData();
  }, [language]);

  const handleVote = async (id: string, vote: 'up' | 'down') => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      
      const result = await VoteService.submitVote(id, vote);
      
      if (result.success) {
        // Mettre à jour les votes utilisateur localement
        const currentVote = userVotes[id];
        
        if (currentVote === vote) {
          // Retirer le vote
          setUserVotes(prev => ({ ...prev, [id]: null }));
        } else {
          // Nouveau vote ou changement
          setUserVotes(prev => ({ ...prev, [id]: vote }));
        }
        
        // Les stats seront mises à jour automatiquement via la subscription temps réel
      } else {
        alert(result.error || 'Erreur lors du vote');
      }
    } catch (error) {
      console.error('Erreur lors du vote:', error);
      alert('Erreur lors du vote. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const sortedPriorities = [...priorities].sort((a, b) => {
    const scoreA = a.upvotes - a.downvotes;
    const scoreB = b.upvotes - b.downvotes;
    return scoreB - scoreA;
  });

  const totalVotes = priorities.reduce((sum, item) => sum + item.upvotes + item.downvotes, 0);
  const totalUserVotes = Object.values(userVotes).filter(vote => vote !== null).length;

  if (isInitialLoading) {
    return (
      <section id="citizen-vote" className="py-16 sm:py-20 md:py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto mb-8"></div>
              <div className="space-y-4">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="h-32 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="citizen-vote" className="py-16 sm:py-20 md:py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#330066] mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Vote Citoyen' : 'Citizen Vote'}
              <span className="ml-3 text-green-600 text-lg">🔴 EN DIRECT</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#330066] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-[#1C1C1C] max-w-3xl mx-auto mb-6 sm:mb-8 px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Votez pour les priorités qui comptent le plus pour Loyola. Vos votes sont enregistrés en temps réel !'
                : 'Vote for the priorities that matter most to Loyola. Your votes are recorded in real time!'
              }
            </p>
            
            {/* Stats */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg inline-block">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#330066]">{totalVotes}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{language === 'fr' ? 'Votes totaux' : 'Total votes'}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#330066]">{priorities.length}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{language === 'fr' ? 'Priorités' : 'Priorities'}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">
                    {totalVotes > 0 ? Math.round((priorities.reduce((sum, item) => sum + item.upvotes, 0) / totalVotes) * 100) : 0}%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{language === 'fr' ? 'Approbation' : 'Approval'}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">{totalUserVotes}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{language === 'fr' ? 'Vos votes' : 'Your votes'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">👍</span>
                </div>
                <h3 className="font-bold text-[#330066] mb-2 text-sm sm:text-base">{language === 'fr' ? 'Votez Pour' : 'Vote For'}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{language === 'fr' ? 'Les priorités qui vous tiennent à cœur' : 'Priorities that matter to you'}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">👎</span>
                </div>
                <h3 className="font-bold text-[#330066] mb-2 text-sm sm:text-base">{language === 'fr' ? 'Votez Contre' : 'Vote Against'}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{language === 'fr' ? 'Les priorités moins importantes' : 'Less important priorities'}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🔄</span>
                </div>
                <h3 className="font-bold text-[#330066] mb-2 text-sm sm:text-base">{language === 'fr' ? 'Temps réel' : 'Real time'}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{language === 'fr' ? 'Vos votes sont enregistrés instantanément' : 'Your votes are recorded instantly'}</p>
              </div>
            </div>
          </div>

          {/* Priority Cards */}
          <div className="space-y-4 sm:space-y-6">
            {sortedPriorities.map((item) => (
              <PriorityCard
                key={item.id}
                item={item}
                onVote={handleVote}
                userVote={userVotes[item.id] || null}
                hasVoted={userVotes[item.id] !== undefined && userVotes[item.id] !== null}
                isLoading={isLoading}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-[#330066] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Merci pour votre participation !' : 'Thank you for your participation!'}
              </h3>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr'
                  ? 'Vos votes aident Alexandre à comprendre les priorités de Loyola. Partagez ce vote pour amplifier l\'impact !'
                  : 'Your votes help Alexandre understand Loyola\'s priorities. Share this vote to amplify the impact!'
                }
              </p>
              <button
                onClick={() => {
                  const currentUrl = window.location && window.location.href ? window.location.href : '';
                  const shareData = {
                    title: language === 'fr' ? 'Vote Citoyen - Loyola' : 'Citizen Vote - Loyola',
                    text: language === 'fr'
                      ? 'Votez pour les priorités qui comptent pour Loyola'
                      : 'Vote for the priorities that matter to Loyola',
                    url: (currentUrl ? currentUrl.split('#')[0] : '') + '#citizen-vote',
                  } as ShareData;
                  if (navigator.share) {
                    navigator.share(shareData).catch(() => {});
                  } else {
                    const urlToCopy = shareData.url ?? ((currentUrl ? currentUrl.split('#')[0] : '') + '#citizen-vote');
                    navigator.clipboard?.writeText(urlToCopy).then(() => {
                      alert(language === 'fr' ? 'Lien copié dans le presse-papiers' : 'Link copied to clipboard');
                    }).catch(() => {
                      prompt(language === 'fr' ? 'Copiez ce lien:' : 'Copy this link:', urlToCopy);
                    });
                  }
                }}
                className="bg-white text-[#330066] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
              >
                {language === 'fr' ? 'Partager le vote' : 'Share Vote'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenVoteReal;