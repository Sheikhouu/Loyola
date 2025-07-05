import React from 'react';
import { ExternalLink, Calendar, Eye } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../translations';

const Media = () => {
  const { language } = useLanguage();
  
  const articles = [
    {
      title: language === 'fr' 
        ? 'Un candidat local propose des solutions de transport innovantes pour Loyola'
        : 'Local Candidate Proposes Innovative Transit Solutions for Loyola',
      excerpt: language === 'fr'
        ? 'Alexandre Teodoresco présente sa vision pour améliorer l\'accès au transport en commun dans l\'arrondissement, incluant de nouvelles lignes d\'autobus et une infrastructure cyclable améliorée.'
        : 'Alexandre Teodoresco outlines his vision for improving public transportation access in the district, including new bus routes and enhanced cycling infrastructure.',
      publication: language === 'fr' ? 'La Gazette de Montréal' : 'Montreal Gazette',
      date: language === 'fr' ? '15 octobre 2024' : 'October 15, 2024',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: language === 'fr' ? 'Transport' : 'Transportation',
      readTime: '5 min',
      link: '#'
    },
    {
      title: language === 'fr'
        ? 'Un leader communautaire se joint à la course au conseil municipal'
        : 'Community Leader Joins Race for City Council',
      excerpt: language === 'fr'
        ? 'Résident de longue date de Loyola, Alexandre Teodoresco annonce sa candidature avec Ensemble Montréal, promettant d\'apporter un leadership collaboratif à la politique municipale.'
        : 'Long-time Loyola resident Alexandre Teodoresco announces his candidacy with Ensemble Montréal, promising to bring collaborative leadership to municipal politics.',
      publication: language === 'fr' ? 'Nouvelles de l\'Ouest-de-l\'Île' : 'West Island News',
      date: language === 'fr' ? '8 octobre 2024' : 'October 8, 2024',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: language === 'fr' ? 'Politique' : 'Politics',
      readTime: '3 min',
      link: '#'
    },
    {
      title: language === 'fr'
        ? 'L\'initiative des espaces verts gagne le soutien d\'un candidat local'
        : 'Green Spaces Initiative Gains Support from Local Candidate',
      excerpt: language === 'fr'
        ? 'Teodoresco appuie les efforts communautaires pour étendre les parcs et créer de nouveaux corridors verts dans l\'arrondissement de Loyola.'
        : 'Teodoresco endorses community-led efforts to expand parkland and create new green corridors throughout the Loyola district.',
      publication: language === 'fr' ? 'Revue environnementale de Montréal' : 'Montreal Environmental Review',
      date: language === 'fr' ? '28 septembre 2024' : 'September 28, 2024',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: language === 'fr' ? 'Environnement' : 'Environment',
      readTime: '4 min',
      link: '#'
    }
  ];

  return (
    <section id="media" className="py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('mediaTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Découvrez notre couverture médiatique et les dernières nouvelles de notre campagne.'
                : 'Discover our media coverage and the latest news from our campaign.'
              }
            </p>
          </div>
          
          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={articles[0].image} 
                    alt={articles[0].title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#0090D1] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {language === 'fr' ? 'Article vedette' : 'Featured'}
                    </span>
                  </div>
                </div>
                <div className="p-12">
                  <div className="flex items-center mb-4 text-sm text-[#0090D1]">
                    <span className="bg-[#0090D1]/10 px-3 py-1 rounded-full mr-4">{articles[0].category}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{articles[0].date}</span>
                    <Eye className="w-4 h-4 mr-2" />
                    <span>{articles[0].readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#292B87] mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {articles[0].title}
                  </h3>
                  <p className="text-[#1C1C1C] mb-8 leading-relaxed text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0090D1] font-medium">{articles[0].publication}</span>
                    <button className="inline-flex items-center text-[#0090D1] hover:text-[#292B87] transition-colors duration-200 font-semibold" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {t('readMore', language)}
                      <ExternalLink size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.slice(1).map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#292B87] px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4 text-sm text-[#0090D1]">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{article.date}</span>
                    <Eye className="w-4 h-4 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#292B87] mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {article.title}
                  </h3>
                  <p className="text-[#1C1C1C] mb-6 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0090D1] font-medium text-sm">{article.publication}</span>
                    <button className="inline-flex items-center text-[#0090D1] hover:text-[#292B87] transition-colors duration-200 font-semibold" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {t('readMore', language)}
                      <ExternalLink size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-[#0090D1] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#292B87] transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' ? 'Voir tous les articles' : 'View all articles'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;