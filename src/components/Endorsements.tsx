import React from 'react';
import { Quote, Star, Users, Crown, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

const Endorsements = () => {
  const { language } = useLanguage();
  
  // Leadership d'Ensemble Montréal
  const leadership = [
    {
      name: 'Soraya Martinez Ferrada',
      role: language === 'fr' ? 'Cheffe d\'Ensemble Montréal et candidate à la mairie' : 'Leader of Ensemble Montréal and mayoral candidate',
      image: '/ensemble_team/Soraya.png',
      link: 'https://ensemblemtl.org/equipe/soraya-martinez-ferrada/'
    }
  ];

  // Maires d'arrondissement Ensemble Montréal
  const mayors = [
    {
      name: 'Alan DeSousa',
      role: language === 'fr' ? 'Maire, Saint-Laurent • Porte-parole finances' : 'Mayor, Saint-Laurent • Finance spokesperson',
      image: '/ensemble_team/Alain.png',
      link: 'https://ensemblemtl.org/equipe/alan-desousa/'
    },
    {
      name: 'Dimitrios (Jim) Beis',
      role: language === 'fr' ? 'Maire, Pierrefonds-Roxboro' : 'Mayor, Pierrefonds-Roxboro',
      image: '/ensemble_team/Dimitrios.png',
      link: 'https://ensemblemtl.org/equipe/dimitrios-beis/'
    },
    {
      name: 'Christine Black',
      role: language === 'fr' ? 'Mairesse, Montréal-Nord • Porte-parole transport' : 'Mayor, Montréal-Nord • Transport spokesperson',
      image: '/ensemble_team/christine-black.png',
      link: 'https://ensemblemtl.org/equipe/christine-black/'
    }
  ];

  // Conseillers et membres de l'équipe
  const councillors = [
    {
      name: 'Benoit Langevin',
      role: language === 'fr' ? 'Conseiller municipal, Pierrefonds-Roxboro' : 'City Councillor, Pierrefonds-Roxboro',
      image: '/ensemble_team/Benoit.png',
      link: 'https://ensemblemtl.org/equipe/benoit-langevin/'
    },
    {
      name: 'Mary Deros',
      role: language === 'fr' ? 'Conseillère municipale, Villeray–Saint-Michel–Parc-Extension' : 'City Councillor, Villeray–Saint-Michel–Parc-Extension',
      image: '/ensemble_team/Mary.png',
      link: 'https://ensemblemtl.org/equipe/mary-deros/'
    },
    {
      name: 'Sonny Moroz',
      role: language === 'fr' ? 'Conseiller municipal, Côte-des-Neiges–Notre-Dame-de-Grâce • Porte-parole sécurité' : 'City Councillor, Côte-des-Neiges–Notre-Dame-de-Grâce • Security spokesperson',
      image: '/ensemble_team/Sonny.png',
      link: 'https://ensemblemtl.org/equipe/sonny-moroz/'
    },
    {
      name: 'Effie Giannou',
      role: language === 'fr' ? 'Conseillère municipale, Ahuntsic-Cartierville' : 'City Councillor, Ahuntsic-Cartierville',
      image: '/ensemble_team/Effie.png',
      link: 'https://ensemblemtl.org/equipe/effie-giannou/'
    },
    {
      name: 'Chantal Rossi',
      role: language === 'fr' ? 'Conseillère municipale, Montréal-Nord' : 'City Councillor, Montréal-Nord',
      image: '/ensemble_team/Chantal.png',
      link: 'https://ensemblemtl.org/equipe/chantal-rossi/'
    },
    {
      name: 'Dominic Perri',
      role: language === 'fr' ? 'Conseiller municipal, Saint-Léonard' : 'City Councillor, Saint-Léonard',
      image: '/ensemble_team/Dominic.png',
      link: 'https://ensemblemtl.org/equipe/dominic-perri/'
    },
    {
      name: 'Stéphanie Valenzuela',
      role: language === 'fr' ? 'Conseillère municipale, Côte-Des-Neiges–Notre-Dame-De-Grâce • Présidente du caucus' : 'City Councillor, Côte-Des-Neiges–Notre-Dame-De-Grâce • Caucus President',
      image: '/ensemble_team/Stephanie.png',
      link: 'https://ensemblemtl.org/equipe/stephanie-valenzuela/'
    }
  ];

  const featuredQuote = {
    text: language === 'fr' 
      ? "Alexandre apporte des idées fraîches et un engagement authentique à notre communauté. Son expérience en urbanisme et sa compréhension profonde des enjeux locaux en font le bon choix pour Loyola."
      : "Alexandre brings fresh ideas and genuine commitment to our community. His experience in urban planning and his deep understanding of local issues make him the right choice for Loyola.",
    author: language === 'fr' ? 'Soraya Martinez Ferrada, Cheffe d\'Ensemble Montréal' : 'Soraya Martinez Ferrada, Leader of Ensemble Montréal'
  };

  return (
    <section id="endorsements" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('endorsementsTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'L\'équipe d\'Ensemble Montréal soutient la candidature d\'Alexandre Teodoresco pour Loyola'
                : 'The Ensemble Montréal team supports Alexandre Teodoresco\'s candidacy for Loyola'
              }
            </p>
          </div>

          {/* Featured Quote */}
          <div className="bg-[#292B87] text-white p-12 rounded-3xl mb-20 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-[#0090D1] opacity-50" />
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                "{featuredQuote.text}"
              </p>
              <div className="flex items-center justify-center">
                <div className="flex text-[#0090D1] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#0090D1] font-semibold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                — {featuredQuote.author}
              </p>
            </div>
          </div>
          
          {/* Leadership Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Crown className="w-8 h-8 text-[#292B87] mr-3" />
              <h3 className="text-3xl font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Leadership' : 'Leadership'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {leadership.map((endorsement, index) => (
                <div key={index} className="group bg-gradient-to-r from-[#292B87] to-[#0090D1] p-8 rounded-2xl text-white shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 mr-6 flex-shrink-0">
                      <img 
                        src={endorsement.image} 
                        alt={endorsement.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Debug: Log l'URL qui ne fonctionne pas
                          console.log('Leadership image failed to load:', endorsement.image);
                          // Fallback si l'image n'existe pas
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                        onLoad={() => {
                          // Debug: Log l'URL qui fonctionne
                          console.log('Leadership image loaded successfully:', endorsement.image);
                        }}
                      />
                      <div className="w-full h-full bg-white/20 hidden items-center justify-center">
                        <Crown className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div>
                      <a 
                        href={endorsement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/80 transition-colors duration-200"
                      >
                        <h4 className="text-2xl font-bold mb-2 hover:underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {endorsement.name}
                        </h4>
                      </a>
                      <p className="text-white/90 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {endorsement.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mayors Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <MapPin className="w-8 h-8 text-[#292B87] mr-3" />
              <h3 className="text-3xl font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Maires d\'arrondissement' : 'Borough Mayors'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mayors.map((endorsement, index) => (
                <div key={index} className="group bg-[#F7F7F7] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg mr-4 flex-shrink-0">
                      <img 
                        src={endorsement.image} 
                        alt={endorsement.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback si l'image n'existe pas
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-[#0090D1] hidden items-center justify-center">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <a 
                        href={endorsement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0090D1] transition-colors duration-200"
                      >
                        <h4 className="text-xl font-bold text-[#292B87] mb-1 hover:underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {endorsement.name}
                        </h4>
                      </a>
                      <div className="flex text-[#0090D1] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {endorsement.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Councillors Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Users className="w-8 h-8 text-[#292B87] mr-3" />
              <h3 className="text-3xl font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Conseillers municipaux' : 'City Councillors'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {councillors.map((endorsement, index) => (
                <div key={index} className="group bg-[#F7F7F7] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg mr-4 flex-shrink-0">
                      <img 
                        src={endorsement.image} 
                        alt={endorsement.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Debug: Log l'URL qui ne fonctionne pas
                          console.log('Councillor image failed to load:', endorsement.image);
                          // Fallback si l'image n'existe pas
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                        onLoad={() => {
                          // Debug: Log l'URL qui fonctionne
                          console.log('Councillor image loaded successfully:', endorsement.image);
                        }}
                      />
                      <div className="w-full h-full bg-[#292B87] hidden items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <a 
                        href={endorsement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0090D1] transition-colors duration-200"
                      >
                        <h4 className="text-xl font-bold text-[#292B87] mb-1 hover:underline" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {endorsement.name}
                        </h4>
                      </a>
                      <div className="flex text-[#0090D1] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {endorsement.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-[#F7F7F7] rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Rejoignez notre équipe' : 'Join our team'}
              </h3>
              <p className="text-lg text-[#1C1C1C] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' 
                  ? 'Ensemble Montréal unit des leaders de tous les arrondissements pour construire un Montréal plus fort et plus inclusif.'
                  : 'Ensemble Montréal brings together leaders from all boroughs to build a stronger, more inclusive Montreal.'
                }
              </p>
              <button 
                onClick={() => window.open('https://monelection.org/form/member/EcTkQougzqf4T32A9Km25W4zCV2aAz', '_blank')}
                className="bg-[#0090D1] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#292B87] transition-all duration-300 transform hover:scale-105 shadow-lg" 
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {language === 'fr' ? 'Rejoindre Ensemble Montréal' : 'Join Ensemble Montréal'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Endorsements;