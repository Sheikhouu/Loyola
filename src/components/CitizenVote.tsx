import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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

interface StoredVotes {
  [priorityId: string]: {
    upvotes: number;
    downvotes: number;
  };
}

const PriorityCard = ({ 
  item, 
  onVote, 
  userVote, 
  hasVoted 
}: { 
  item: PriorityItem; 
  onVote: (id: string, vote: 'up' | 'down') => void;
  userVote: 'up' | 'down' | null;
  hasVoted: boolean;
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
            disabled={hasVoted && !isUpvoted}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 ${
              isUpvoted 
                ? 'bg-green-500 text-white' 
                : hasVoted 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-green-100 hover:bg-green-200 text-green-700'
            }`}
          >
            <span className="text-sm sm:text-base">👍</span>
            <span className="font-semibold text-sm sm:text-base">{item.upvotes}</span>
          </button>
          
          <button
            onClick={() => onVote(item.id, 'down')}
            disabled={hasVoted && !isDownvoted}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 ${
              isDownvoted 
                ? 'bg-red-500 text-white' 
                : hasVoted 
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
        </div>
      </div>
    </div>
  );
};

const CitizenVote = () => {
  const { language } = useLanguage();
  
  // Données de base des priorités (sans votes)
  const basePriorities: Omit<PriorityItem, 'upvotes' | 'downvotes'>[] = [
    {
      id: 'homelessness',
      title: language === 'fr' ? 'Itinérance' : 'Homelessness',
      description: language === 'fr' 
        ? 'Solutions pour réduire l\'itinérance et améliorer les services sociaux'
        : 'Solutions to reduce homelessness and improve social services',
      category: 'urgent'
    },
    {
      id: 'water-system',
      title: language === 'fr' ? 'Système des eaux' : 'Water System',
      description: language === 'fr'
        ? 'Réflexion et amélioration du système de gestion des eaux'
        : 'Reflection and improvement of water management system',
      category: 'important'
    },
    {
      id: 'garbage-service',
      title: language === 'fr' ? 'Services des éboueurs' : 'Garbage Collection',
      description: language === 'fr'
        ? 'Amélioration de la qualité et de la fréquence des services'
        : 'Improving quality and frequency of collection services',
      category: 'urgent'
    },
    {
      id: 'sports-fields',
      title: language === 'fr' ? 'Terrains de sport' : 'Sports Fields',
      description: language === 'fr'
        ? 'Construction de nouveaux terrains de soccer, basketball, etc.'
        : 'Construction of new soccer, basketball fields, etc.',
      category: 'nice-to-have'
    }
  ];

  const [priorities, setPriorities] = useState<PriorityItem[]>([]);
  const [userVotes, setUserVotes] = useState<UserVotes>({});

  // Charger les votes depuis localStorage au démarrage
  useEffect(() => {
    // Charger les votes totaux
    const savedVotes = localStorage.getItem('allVotes');
    let storedVotes: StoredVotes = {};
    
    if (savedVotes) {
      try {
        storedVotes = JSON.parse(savedVotes);
      } catch (error) {
        console.error('Erreur lors du chargement des votes totaux:', error);
      }
    }

    // Charger les votes de l'utilisateur
    const savedUserVotes = localStorage.getItem('userVotes');
    let userVotesData: UserVotes = {};
    
    if (savedUserVotes) {
      try {
        userVotesData = JSON.parse(savedUserVotes);
      } catch (error) {
        console.error('Erreur lors du chargement des votes utilisateur:', error);
      }
    }

    // Construire les priorités avec les votes sauvegardés
    const prioritiesWithVotes = basePriorities.map(priority => ({
      ...priority,
      upvotes: storedVotes[priority.id]?.upvotes || 0,
      downvotes: storedVotes[priority.id]?.downvotes || 0
    }));

    setPriorities(prioritiesWithVotes);
    setUserVotes(userVotesData);
  }, [language]);

  // Sauvegarder les votes totaux dans localStorage
  const saveAllVotes = (newPriorities: PriorityItem[]) => {
    const votesToSave: StoredVotes = {};
    newPriorities.forEach(priority => {
      votesToSave[priority.id] = {
        upvotes: priority.upvotes,
        downvotes: priority.downvotes
      };
    });
    localStorage.setItem('allVotes', JSON.stringify(votesToSave));
  };

  // Sauvegarder les votes de l'utilisateur dans localStorage
  useEffect(() => {
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
  }, [userVotes]);

  const handleVote = (id: string, vote: 'up' | 'down') => {
    // Vérifier si l'utilisateur a déjà voté pour cette priorité
    const currentVote = userVotes[id];
    
    if (currentVote === vote) {
      // Si l'utilisateur clique sur le même vote, on le retire
      setUserVotes(prev => ({ ...prev, [id]: null }));
      setPriorities(prev => {
        const newPriorities = prev.map(item => 
          item.id === id 
            ? { ...item, [vote === 'up' ? 'upvotes' : 'downvotes']: item[vote === 'up' ? 'upvotes' : 'downvotes'] - 1 }
            : item
        );
        saveAllVotes(newPriorities);
        return newPriorities;
      });
    } else {
      // Nouveau vote ou changement de vote
      const newVote = vote;
      setUserVotes(prev => ({ ...prev, [id]: newVote }));
      
      setPriorities(prev => {
        const newPriorities = prev.map(item => {
          if (item.id === id) {
            let newItem = { ...item };
            
            // Retirer l'ancien vote s'il y en avait un
            if (currentVote === 'up') {
              newItem.upvotes -= 1;
            } else if (currentVote === 'down') {
              newItem.downvotes -= 1;
            }
            
            // Ajouter le nouveau vote
            if (newVote === 'up') {
              newItem.upvotes += 1;
            } else if (newVote === 'down') {
              newItem.downvotes += 1;
            }
            
            return newItem;
          }
          return item;
        });
        saveAllVotes(newPriorities);
        return newPriorities;
      });
    }
  };

  const sortedPriorities = [...priorities].sort((a, b) => {
    const scoreA = a.upvotes - a.downvotes;
    const scoreB = b.upvotes - b.downvotes;
    return scoreB - scoreA;
  });

  const totalVotes = priorities.reduce((sum, item) => sum + item.upvotes + item.downvotes, 0);
  const totalUserVotes = Object.values(userVotes).filter(vote => vote !== null).length;

  return (
    <section id="citizen-vote" className="py-16 sm:py-20 md:py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#330066] mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Vote Citoyen' : 'Citizen Vote'}
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#330066] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-[#1C1C1C] max-w-3xl mx-auto mb-6 sm:mb-8 px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Votez pour les priorités qui comptent le plus pour Loyola. Votre voix façonne notre avenir commun.'
                : 'Vote for the priorities that matter most to Loyola. Your voice shapes our common future.'
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
                  <span className="text-xl sm:text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-[#330066] mb-2 text-sm sm:text-base">{language === 'fr' ? 'Une seule fois' : 'One time only'}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{language === 'fr' ? 'Un vote par priorité, vous pouvez changer votre vote' : 'One vote per priority, you can change your vote'}</p>
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
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-[#330066] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Votre voix compte !' : 'Your voice matters!'}
              </h3>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr'
                  ? 'Partagez ce vote avec vos voisins et amis pour amplifier l\'impact de notre communauté.'
                  : 'Share this vote with your neighbors and friends to amplify our community\'s impact.'
                }
              </p>
              <button className="bg-white text-[#330066] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base">
                {language === 'fr' ? 'Partager le vote' : 'Share Vote'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenVote; 