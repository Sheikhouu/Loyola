import React from 'react';
import { Award, BookOpen, Users, MapPin, Quote, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

const About = () => {
  const { language } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section 1 — Citation + Vidéo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Colonne gauche : Citation */}
            <div className="relative">
              <div className="border-4 border-[#0090D1] p-8 rounded-2xl bg-white shadow-lg">
                {/* Guillemets rouges */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FF2D23] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#FF2D23] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white rotate-180" />
                </div>
                
                <p className="text-2xl md:text-3xl font-bold text-[#292B87] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' 
                    ? "Cette campagne s'adresse à toute personne qui croit en la dignité de ses voisins et que le rôle du gouvernement est de réellement améliorer nos vies."
                    : "This campaign is for everyone who believes in the dignity of their neighbors and that the role of government is to truly improve our lives."
                  }
                </p>
              </div>
            </div>
            
            {/* Colonne droite : Vidéo */}
            <div className="relative">
              <div className="bg-[#F7F7F7] rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-[#292B87] to-[#0090D1] flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Vidéo de campagne' : 'Campaign Video'}
                    </p>
                    <p className="text-sm opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' ? 'Le coût de la vie est la vraie crise' : 'The cost of living is the real crisis'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 — Portrait + Présentation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Colonne gauche : Image de campagne */}
            <div className="relative">
              <div className="bg-[#F7F7F7] rounded-2xl p-8 shadow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#292B87] to-[#0090D1] rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-12 h-12" />
                    </div>
                    <p className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'UNE VILLE QUE NOUS POUVONS NOUS PERMETTRE' : 'A CITY WE CAN AFFORD'}
                    </p>
                    <p className="text-sm opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' ? 'Alexandre parlant au micro' : 'Alexandre speaking at microphone'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Colonne droite : Biographie */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('aboutTitle', language)}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('aboutBio1', language)}
                </p>
                
                <p className="text-lg text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('aboutBio2', language)}
                </p>
                
                <p className="text-lg text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('aboutBio3', language)}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 — Call to Action : Impliquez-vous */}
          <div className="bg-[#0090D1] rounded-3xl p-12 mb-24">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-[#FF2D23] mb-4 uppercase tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'IMPLIQUEZ-VOUS' : 'GET INVOLVED'}
                    </h3>
                    <h4 className="text-3xl md:text-4xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Rejoignez Alexandre pour Loyola' : 'Join Alexandre for Loyola'}
                    </h4>
                    <p className="text-lg text-[#1C1C1C] leading-relaxed mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' 
                        ? 'Cette campagne vise à sensibiliser des milliers de résidents de Loyola sur la manière d\'améliorer le fonctionnement de notre arrondissement pour le plus grand nombre.'
                        : 'This campaign aims to raise awareness among thousands of Loyola residents about how to improve the functioning of our district for the greatest number.'
                      }
                    </p>
                    <button 
                      onClick={() => window.open('https://monelection.org/form/member/EcTkQougzqf4T32A9Km25W4zCV2aAz', '_blank')}
                      className="bg-[#292B87] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1C1C1C] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center" 
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {language === 'fr' ? 'S\'impliquer maintenant' : 'Get involved now'}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="bg-[#F7F7F7] rounded-xl p-6">
                    <div className="aspect-square bg-gradient-to-br from-[#292B87] to-[#0090D1] rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <Users className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {language === 'fr' ? 'Militants' : 'Activists'}
                        </p>
                        <p className="text-sm opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {language === 'fr' ? 'Tenant des pancartes' : 'Holding signs'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 — Ligne du temps politique zigzag */}
          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-bold text-[#292B87] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Notre parcours politique' : 'Our Political Journey'}
            </h3>
            <div className="relative w-full flex justify-center">
              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full z-0">
                <svg width="120" height="600" viewBox="0 0 120 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
                  <polyline points="60,0 10,100 110,200 10,300 110,400 60,600" fill="none" stroke="#0090D1" strokeWidth="6" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col w-full md:w-[700px] mx-auto">
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
                  <div key={index} className="relative flex md:min-h-[150px]">
                    {/* Point du zigzag */}
                    <div className={`hidden md:block absolute z-10 ${index % 2 === 0 ? 'left-[10px]' : 'right-[10px]'} top-1/2 -translate-y-1/2 w-7 h-7 bg-[#292B87] rounded-full border-4 border-white shadow-lg`}></div>
                    {/* Carte alternée */}
                    {index % 2 === 0 ? (
                      <div className="w-full md:w-1/2 md:pl-[80px] md:pr-0 flex flex-col items-start md:items-end">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0090D1] max-w-md text-left md:text-right">
                          <div className="text-sm font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.year}</div>
                          <h4 className="text-xl font-bold text-[#292B87] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h4>
                          <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>{item.description}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full md:w-1/2 md:pr-[80px] md:pl-0 flex flex-col items-end md:items-start ml-auto">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-[#0090D1] max-w-md text-left">
                          <div className="text-sm font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.year}</div>
                          <h4 className="text-xl font-bold text-[#292B87] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h4>
                          <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>{item.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5 — Approbations */}
          <div className="bg-[#0090D1] rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Approbations' : 'Endorsements'}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { name: 'Bernie Sanders', title: 'SENATOR', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
                { name: 'AOC', title: 'CONGRESSWOMAN', image: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
                { name: 'Letitia James', title: 'ATTORNEY GENERAL', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
                { name: 'Brad Lander', title: 'COMPTROLLER', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
                { name: 'Working Families', title: 'PARTY', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' }
              ].map((endorser, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={endorser.image} 
                      alt={endorser.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {endorser.name}
                  </h4>
                  <p className="text-white/80 text-xs" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {endorser.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;