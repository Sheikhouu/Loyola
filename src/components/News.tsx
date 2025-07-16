import React from 'react';
import { ExternalLink, Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

const News = () => {
  const { language } = useLanguage();
  
  // Articles récents d'Ensemble Montréal (extraits du site)
  const newsArticles = [
    {
      id: 1,
      date: '2 juillet 2025',
      category: 'Habitation',
      title: '1er juillet : Soraya Martinez Ferrada veut miser sur la force du communautaire',
      excerpt: 'La candidate à la mairie de la métropole et cheffe d\'Ensemble Montréal, Soraya Martinez Ferrada, a présenté des engagements aujourd\'hui pour éviter que des locataires se retrouvent à la rue ou soient hébergés pendant des mois à l\'hôtel...',
      link: 'https://ensemblemtl.org/actualites/',
      color: 'bg-red-500'
    },
    {
      id: 2,
      date: '30 juin 2025',
      category: 'Équipe',
      title: 'Soraya Martinez Ferrada présente son équipe à Saint-Léonard',
      excerpt: 'Présentation de l\'équipe d\'Ensemble Montréal pour l\'arrondissement de Saint-Léonard avec des candidats engagés pour la communauté locale.',
      link: 'https://ensemblemtl.org/actualites/',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      date: '25 juin 2025',
      category: 'Habitation',
      title: 'Soraya Martinez Ferrada promet un coup de barre pour livrer des milliers de logements hors marché',
      excerpt: 'Des engagements concrets pour accélérer la construction de logements abordables et sociaux à travers Montréal.',
      link: 'https://ensemblemtl.org/actualites/',
      color: 'bg-green-500'
    },
    {
      id: 4,
      date: '18 juin 2025',
      category: 'Culture',
      title: 'Soraya Martinez Ferrada s\'engage à mieux soutenir les festivals',
      excerpt: 'Un plan pour renforcer le soutien municipal aux festivals culturels qui font la richesse de Montréal.',
      link: 'https://ensemblemtl.org/actualites/',
      color: 'bg-purple-500'
    },
    {
      id: 5,
      date: '5 juin 2025',
      category: 'Développement économique',
      title: 'Soraya Martinez Ferrada promet la gratuité des terrasses dans Ville-Marie',
      excerpt: 'Une mesure pour soutenir les restaurateurs et dynamiser la vie économique du centre-ville.',
      link: 'https://ensemblemtl.org/actualites/',
      color: 'bg-orange-500'
    },
    {
      id: 6,
      date: '27 mai 2025',
      category: 'Ahuntsic-Cartierville',
      title: 'Soraya Martinez Ferrada annonce la candidature de Maude Théroux-Séguin à la mairie d\'Ahuntsic–Cartierville',
      excerpt: 'Présentation d\'une candidate expérimentée en culture et développement économique pour l\'arrondissement.',
      link: 'https://ensemblemtl.org/actualites/',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="news" className="py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Newspaper className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#292B87] mr-2 sm:mr-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('newsTitle', language)}
              </h2>
            </div>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-[#1C1C1C] max-w-4xl mx-auto mb-8 px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('newsSubtitle', language)}
            </p>
            <p className="text-base sm:text-lg text-[#1C1C1C]/80 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('newsDescription', language)}
            </p>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {newsArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Article Header */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-2 py-1 sm:px-3 rounded-full text-xs font-semibold text-white ${article.color}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-[#1C1C1C]/60 text-xs sm:text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {article.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-[#292B87] mb-3 sm:mb-4 line-clamp-2 group-hover:text-[#0090D1] transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {article.title}
                  </h3>
                  
                  <p className="text-[#1C1C1C]/80 text-xs sm:text-sm line-clamp-3 mb-4 sm:mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {article.excerpt}
                  </p>
                  
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#292B87] hover:text-[#0090D1] font-semibold text-xs sm:text-sm transition-all duration-300 group/link"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {t('readFullArticle', language)}
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Restez connecté avec Ensemble Montréal
              </h3>
              <p className="text-base sm:text-lg text-[#1C1C1C]/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Ne manquez aucune actualité, initiative ou événement d'Ensemble Montréal. 
                Visitez notre site officiel pour toutes les dernières nouvelles.
              </p>
              <a 
                href="https://ensemblemtl.org/actualites/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#292B87] hover:bg-[#0090D1] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('viewAllNews', language)}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 