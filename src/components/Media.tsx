import React from 'react';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../translations';

const Press = () => {
  const { language } = useLanguage();
  
  const pressArticles = [
    {
      title: language === 'fr' 
        ? 'Alexandre Teodoresco : Un nouveau souffle pour Loyola'
        : 'Alexandre Teodoresco: A Fresh Perspective for Loyola',
      outlet: 'La Presse',
      date: '15 janvier 2024',
      excerpt: language === 'fr'
        ? 'Le candidat d\'Ensemble Montréal présente sa vision pour un arrondissement plus durable et inclusif.'
        : 'The Ensemble Montréal candidate presents his vision for a more sustainable and inclusive district.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      url: '#'
    },
    {
      title: language === 'fr'
        ? 'Transport en commun : des solutions concrètes pour Loyola'
        : 'Public Transit: Concrete Solutions for Loyola',
      outlet: 'CBC Montreal',
      date: '8 janvier 2024',
      excerpt: language === 'fr'
        ? 'L\'urbaniste propose des améliorations significatives pour connecter Loyola au reste de la métropole.'
        : 'The urban planner proposes significant improvements to connect Loyola to the rest of the metropolis.',
      image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      url: '#'
    },
    {
      title: language === 'fr'
        ? 'Environnement : protéger les espaces verts de Loyola'
        : 'Environment: Protecting Loyola\'s Green Spaces',
      outlet: 'Le Devoir',
      date: '3 janvier 2024',
      excerpt: language === 'fr'
        ? 'Alexandre Teodoresco détaille ses plans pour préserver et développer les parcs et corridors verts.'
        : 'Alexandre Teodoresco details his plans to preserve and develop parks and green corridors.',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      url: '#'
    },
    {
      title: language === 'fr'
        ? 'Logement abordable : une priorité pour tous'
        : 'Affordable Housing: A Priority for All',
      outlet: 'Journal de Montréal',
      date: '28 décembre 2023',
      excerpt: language === 'fr'
        ? 'Le candidat propose des mesures innovantes pour maintenir la diversité économique dans l\'arrondissement.'
        : 'The candidate proposes innovative measures to maintain economic diversity in the district.',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      url: '#'
    }
  ];

  return (
    <section id="press" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('pressTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Découvrez la couverture médiatique de notre campagne et les enjeux qui touchent Loyola.'
                : 'Discover media coverage of our campaign and the issues affecting Loyola.'
              }
            </p>
          </div>
          
          {/* Press Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressArticles.map((article, index) => (
              <article key={index} className="group bg-[#F7F7F7] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0090D1] text-white">
                      {article.outlet}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-[#1C1C1C]/70 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#292B87] mb-4 group-hover:text-[#0090D1] transition-colors duration-200" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {article.title}
                  </h3>
                  
                  <p className="text-[#1C1C1C] leading-relaxed mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {article.excerpt}
                  </p>
                  
                  <a 
                    href={article.url}
                    className="group/link inline-flex items-center text-[#0090D1] font-semibold hover:text-[#292B87] transition-colors duration-200"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {t('readMore', language)}
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {/* Press Contact */}
          <div className="mt-16 text-center">
            <div className="bg-[#F7F7F7] rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-[#292B87] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Contact presse' : 'Press Contact'}
              </h3>
              <p className="text-[#1C1C1C] mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr'
                  ? 'Pour toute demande d\'interview ou d\'information, contactez notre équipe de presse.'
                  : 'For interview requests or information, contact our press team.'
                }
              </p>
              <a 
                href="mailto:presse@alexandreteo.ca"
                className="inline-flex items-center bg-[#0090D1] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#292B87] transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                presse@alexandreteo.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;