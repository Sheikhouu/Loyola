import React from 'react';
import { MapPin, Calendar, Briefcase, GraduationCap, Heart, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

const About = () => {
  const { language } = useLanguage();

  const personalInfo = [
    {
      icon: GraduationCap,
      title: t('education', language),
      description: t('educationDesc', language)
    },
    {
      icon: Briefcase,
      title: t('experience', language),
      description: t('experienceDesc', language)
    },
    {
      icon: Users,
      title: t('engagement', language),
      description: t('engagementDesc', language)
    },
    {
      icon: MapPin,
      title: t('residence', language),
      description: t('residenceDesc', language)
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('aboutTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-[#1C1C1C] max-w-3xl mx-auto px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('aboutSubtitle', language)}
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Section 1 — Main Bio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('aboutCommitment', language)}
                </h3>
                
                <div className="space-y-6 text-[#1C1C1C]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <p className="text-base sm:text-lg leading-relaxed">
                    {t('aboutBio1', language)}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    {t('aboutBio2', language)}
                  </p>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-[#292B87] to-[#0090D1] rounded-3xl shadow-2xl flex items-center justify-center">
                  <span className="text-white text-lg sm:text-xl font-semibold text-center px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Photo d'Alexandre Teodoresco
                  </span>
                </div>
              </div>
            </div>

            {/* Section 2 — Experience & Education */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {language === 'fr' ? 'Parcours professionnel' : 'Professional Background'}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('aboutBio3', language)}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {language === 'fr' ? 'Vision pour Loyola' : 'Vision for Loyola'}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('aboutBio4', language)}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — Personal Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {personalInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#292B87] to-[#0090D1] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#292B87] mb-3 sm:mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 4 — Parcours politique zigzag */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292B87] mb-8 sm:mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Notre parcours politique' : 'Our Political Journey'}
              </h3>
              <div className="relative w-full flex justify-center">
                <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full z-0">
                  <svg width="120" height="600" viewBox="0 0 120 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
                    <polyline points="60,0 10,100 110,200 10,300 110,400 60,600" fill="none" stroke="#0090D1" strokeWidth="6" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col w-full lg:w-[700px] mx-auto space-y-6 lg:space-y-0">
                  {[
                    {
                      year: '2012-2016',
                      title: language === 'fr' ? 'Formation en urbanisme' : 'Urban Planning Education',
                      description: language === 'fr' ? 'Maîtrise en urbanisme de l\'Université McGill, spécialisation en développement durable.' : 'Master\'s degree in Urban Planning from McGill University, specializing in sustainable development.'
                    },
                    {
                      year: '2016-2020',
                      title: language === 'fr' ? 'Engagement communautaire' : 'Community Engagement',
                      description: language === 'fr' ? 'Membre actif de groupes environnementaux locaux et associations de quartier dans Loyola.' : 'Active member of local environmental groups and neighborhood associations in Loyola.'
                    },
                    {
                      year: '2020-2024',
                      title: language === 'fr' ? 'Projets de transport durable' : 'Sustainable Transport Projects',
                      description: language === 'fr' ? 'Travail sur des projets de transport durable à travers Montréal, défense d\'un meilleur accès au transport en commun.' : 'Work on sustainable transportation projects across Montreal, advocating for better public transit access.'
                    },
                    {
                      year: '2024',
                      title: language === 'fr' ? 'Candidature au conseil municipal' : 'City Council Candidacy',
                      description: language === 'fr' ? 'Alexandre se présente avec Ensemble Montréal pour représenter Loyola au conseil municipal de Montréal.' : 'Alexandre is running with Ensemble Montréal to represent Loyola on Montreal City Council.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative flex lg:min-h-[150px]">
                      {/* Point du zigzag */}
                      <div className={`hidden lg:block absolute z-10 ${index % 2 === 0 ? 'left-[10px]' : 'right-[10px]'} top-1/2 -translate-y-1/2 w-7 h-7 bg-[#292B87] rounded-full border-4 border-white shadow-lg`}></div>
                      {/* Carte alternée */}
                      {index % 2 === 0 ? (
                        <div className="w-full lg:w-1/2 lg:pl-[80px] lg:pr-0 flex flex-col items-start lg:items-end">
                          <div className="bg-[#F7F7F7] p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-[#0090D1] max-w-md text-left lg:text-right w-full">
                            <div className="text-xs sm:text-sm font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.year}</div>
                            <h4 className="text-lg sm:text-xl font-bold text-[#292B87] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h4>
                            <p className="text-sm sm:text-base text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>{item.description}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full lg:w-1/2 lg:pr-[80px] lg:pl-0 flex flex-col items-end lg:items-start lg:ml-auto">
                          <div className="bg-[#F7F7F7] p-4 sm:p-6 rounded-xl shadow-lg border-l-4 lg:border-l-0 lg:border-r-4 border-[#0090D1] max-w-md text-left w-full">
                            <div className="text-xs sm:text-sm font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.year}</div>
                            <h4 className="text-lg sm:text-xl font-bold text-[#292B87] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h4>
                            <p className="text-sm sm:text-base text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>{item.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 5 — Key Values/Mission */}
            <div className="bg-gradient-to-r from-[#292B87] to-[#0090D1] rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 text-white" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Au service de notre communauté' : 'Serving our community'}
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' 
                  ? 'Avec Ensemble Montréal, je m\'engage à être votre voix au conseil municipal. Ensemble, nous bâtirons une Loyola plus inclusive, plus durable et plus prospère pour tous.'
                  : 'With Ensemble Montréal, I commit to being your voice on city council. Together, we will build a more inclusive, sustainable and prosperous Loyola for all.'
                }
              </p>
            </div>

            {/* Section 6 — Équipe Ensemble Montréal */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'L\'équipe Ensemble Montréal' : 'The Ensemble Montréal Team'}
                </h3>
                <p className="text-base sm:text-lg text-[#1C1C1C] max-w-3xl mx-auto px-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {language === 'fr' 
                    ? 'Alexandre fait partie d\'une équipe expérimentée de leaders dévoués à améliorer la qualité de vie à Montréal.'
                    : 'Alexandre is part of an experienced team of leaders dedicated to improving quality of life in Montreal.'
                  }
                </p>
              </div>

              {/* Cheffe du parti */}
              <div className="mb-8 sm:mb-12">
                <h4 className="text-xl sm:text-2xl font-bold text-[#292B87] mb-6 sm:mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Leadership' : 'Leadership'}
                </h4>
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-[#292B87] to-[#0090D1] p-6 sm:p-8 rounded-2xl text-white max-w-md text-center w-full mx-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white/30 mx-auto mb-4 sm:mb-6">
                      <img 
                        src="/ensemble_team/Soraya.png" 
                        alt="Soraya Martinez Ferrada"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <h5 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Soraya Martinez Ferrada
                    </h5>
                    <p className="text-sm sm:text-base text-white/90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' ? 'Cheffe d\'Ensemble Montréal et candidate à la mairie' : 'Leader of Ensemble Montréal and mayoral candidate'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Maires d'arrondissement */}
              <div className="mb-8 sm:mb-12">
                <h4 className="text-xl sm:text-2xl font-bold text-[#292B87] mb-6 sm:mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Maires d\'arrondissement' : 'Borough Mayors'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    {
                      name: 'Alan DeSousa',
                      role: language === 'fr' ? 'Maire, Saint-Laurent' : 'Mayor, Saint-Laurent',
                      image: '/ensemble_team/Alain.png'
                    },
                    {
                      name: 'Dimitrios (Jim) Beis',
                      role: language === 'fr' ? 'Maire, Pierrefonds-Roxboro' : 'Mayor, Pierrefonds-Roxboro',
                      image: '/ensemble_team/Dimitrios.png'
                    },
                    {
                      name: 'Christine Black',
                      role: language === 'fr' ? 'Mairesse, Montréal-Nord' : 'Mayor, Montréal-Nord',
                      image: '/ensemble_team/christine-black.png'
                    }
                  ].map((member, index) => (
                    <div key={index} className="bg-[#F7F7F7] p-4 sm:p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-[#292B87] mx-auto mb-3 sm:mb-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <h5 className="text-base sm:text-lg font-bold text-[#292B87] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {member.name}
                      </h5>
                      <p className="text-[#1C1C1C] text-xs sm:text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conseillers municipaux */}
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#292B87] mb-6 sm:mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Conseillers municipaux' : 'City Councillors'}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                  {[
                    {
                      name: 'Benoit Langevin',
                      role: language === 'fr' ? 'Pierrefonds-Roxboro' : 'Pierrefonds-Roxboro',
                      image: '/ensemble_team/Benoit.png'
                    },
                    {
                      name: 'Mary Deros',
                      role: language === 'fr' ? 'Villeray–Saint-Michel–Parc-Extension' : 'Villeray–Saint-Michel–Parc-Extension',
                      image: '/ensemble_team/Mary.png'
                    },
                    {
                      name: 'Sonny Moroz',
                      role: language === 'fr' ? 'Côte-des-Neiges–Notre-Dame-de-Grâce' : 'Côte-des-Neiges–Notre-Dame-de-Grâce',
                      image: '/ensemble_team/Sonny.png'
                    },
                    {
                      name: 'Effie Giannou',
                      role: language === 'fr' ? 'Ahuntsic-Cartierville' : 'Ahuntsic-Cartierville',
                      image: '/ensemble_team/Effie.png'
                    },
                    {
                      name: 'Chantal Rossi',
                      role: language === 'fr' ? 'Montréal-Nord' : 'Montréal-Nord',
                      image: '/ensemble_team/Chantal.png'
                    },
                    {
                      name: 'Dominic Perri',
                      role: language === 'fr' ? 'Saint-Léonard' : 'Saint-Léonard',
                      image: '/ensemble_team/Dominic.png'
                    }
                  ].map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#292B87] mx-auto mb-2 sm:mb-3">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#292B87] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {member.name}
                      </h5>
                      <p className="text-[#1C1C1C] text-xs leading-tight" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;