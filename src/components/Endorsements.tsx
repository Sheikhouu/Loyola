import React from 'react';
import { Quote, Star, Users, Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../translations';

const Endorsements = () => {
  const { language } = useLanguage();
  
  const endorsements = [
    {
      quote: t('endorsementQuote', language),
      author: language === 'fr' ? 'Marie Dubois' : 'Marie Dubois',
      title: language === 'fr' ? 'Présidente, Coalition des groupes communautaires de Loyola' : 'President, Coalition of Loyola Community Groups',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      quote: language === 'fr'
        ? '"L\'expertise d\'Alexandre en urbanisme et sa passion pour l\'environnement en font un candidat exceptionnel. Il comprend vraiment les défis auxquels fait face notre communauté."'
        : '"Alexandre\'s expertise in urban planning and his passion for the environment make him an exceptional candidate. He truly understands the challenges our community faces."',
      author: language === 'fr' ? 'Dr. Michel Tremblay' : 'Dr. Michel Tremblay',
      title: language === 'fr' ? 'Directeur, Centre environnemental de Loyola' : 'Director, Loyola Environmental Center',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      quote: language === 'fr'
        ? '"Un vrai leader qui écoute les résidents et propose des solutions concrètes. Alexandre a ma confiance totale pour représenter Loyola au conseil municipal."'
        : '"A true leader who listens to residents and proposes concrete solutions. Alexandre has my complete trust to represent Loyola on city council."',
      author: language === 'fr' ? 'Sarah Johnson' : 'Sarah Johnson',
      title: language === 'fr' ? 'Propriétaire d\'entreprise locale et résidente' : 'Local Business Owner and Resident',
      image: 'https://images.pexels.com/photos/3777561/pexels-photo-3777561.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  const organizationEndorsements = [
    {
      name: 'Coalition des groupes communautaires de Loyola',
      type: language === 'fr' ? 'Organisation communautaire' : 'Community Organization',
      logo: '🏘️'
    },
    {
      name: 'Association des parents de Loyola',
      type: language === 'fr' ? 'Association de parents' : 'Parent Association',
      logo: '👨‍👩‍👧‍👦'
    },
    {
      name: 'Syndicat des employés municipaux',
      type: language === 'fr' ? 'Syndicat' : 'Union',
      logo: '🤝'
    },
    {
      name: 'Centre environnemental de Loyola',
      type: language === 'fr' ? 'Organisation environnementale' : 'Environmental Organization',
      logo: '🌱'
    },
    {
      name: 'Chambre de commerce locale',
      type: language === 'fr' ? 'Commerce' : 'Business',
      logo: '🏪'
    },
    {
      name: 'Association des cyclistes de Montréal',
      type: language === 'fr' ? 'Transport actif' : 'Active Transportation',
      logo: '🚴‍♀️'
    }
  ];

  return (
    <section id="endorsements" className="py-24 bg-gradient-to-br from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0090D1] rounded-full mb-8">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('endorsementsTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Des leaders communautaires, des organisations et des résidents font confiance à Alexandre pour représenter Loyola.'
                : 'Community leaders, organizations and residents trust Alexandre to represent Loyola.'
              }
            </p>
          </div>
          
          {/* Featured Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {endorsements.map((endorsement, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-[#0090D1]" />
                </div>
                
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-[#1C1C1C] leading-relaxed mb-8 relative z-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {endorsement.quote}
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={endorsement.image} 
                    alt={endorsement.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-[#292B87] text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {endorsement.author}
                    </div>
                    <div className="text-[#0090D1] text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {endorsement.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Organization Endorsements */}
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#292B87] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Organisations qui nous soutiennent' : 'Supporting Organizations'}
              </h3>
              <p className="text-[#1C1C1C] text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' 
                  ? 'Plus de 25 organisations locales ont officiellement endorsé notre candidature.'
                  : 'Over 25 local organizations have officially endorsed our candidacy.'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizationEndorsements.map((org, index) => (
                <div key={index} className="group bg-[#F7F7F7] rounded-xl p-6 hover:bg-[#0090D1] hover:text-white transition-all duration-300 cursor-pointer">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {org.logo}
                    </div>
                    <div>
                      <div className="font-bold text-lg group-hover:text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {org.name}
                      </div>
                      <div className="text-sm text-[#1C1C1C]/70 group-hover:text-white/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {org.type}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#292B87] to-[#0090D1] rounded-2xl p-8 text-white">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Voulez-vous endorser Alexandre ?' : 'Want to Endorse Alexandre?'}
              </h3>
              <p className="text-lg mb-6 opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' 
                  ? 'Rejoignez les centaines de résidents qui soutiennent notre vision pour Loyola.'
                  : 'Join hundreds of residents who support our vision for Loyola.'
                }
              </p>
              <a 
                href="mailto:endorsements@alexandreteo.ca"
                className="inline-flex items-center bg-white text-[#292B87] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {language === 'fr' ? 'Ajouter mon soutien' : 'Add My Support'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Endorsements;