import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../translations';

const Endorsements = () => {
  const { language } = useLanguage();
  
  const endorsements = [
    {
      name: 'Maria Santos',
      role: language === 'fr' ? 'Présidente, Association des résidents de Loyola' : 'President, Loyola Residents Association',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Robert Chen',
      role: language === 'fr' ? 'Médecin local et défenseur de la santé communautaire' : 'Local Physician and Community Health Advocate',
      image: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Jennifer Williams',
      role: language === 'fr' ? 'Propriétaire de petite entreprise et militante environnementale' : 'Small Business Owner and Environmental Activist',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michel Dubois',
      role: language === 'fr' ? 'Enseignant retraité et membre du conseil scolaire' : 'Retired Teacher and School Board Member',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Thompson',
      role: language === 'fr' ? 'Coordinatrice de programmes jeunesse' : 'Youth Program Coordinator',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'David Martinez',
      role: language === 'fr' ? 'Représentant syndical, SCFP Local 301' : 'Union Representative, CUPE Local 301',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const featuredQuote = {
    text: language === 'fr' 
      ? "Alexandre apporte des idées fraîches et un engagement authentique à notre communauté. Son expérience en urbanisme et sa compréhension profonde des enjeux locaux en font le bon choix pour Loyola."
      : "Alexandre brings fresh ideas and genuine commitment to our community. His experience in urban planning and his deep understanding of local issues make him the right choice for Loyola.",
    author: language === 'fr' ? 'Coalition des groupes communautaires de Loyola' : 'Coalition of Loyola Community Groups'
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
                ? 'Des leaders communautaires, des professionnels et des résidents de Loyola nous font confiance.'
                : 'Community leaders, professionals, and Loyola residents trust us.'
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
          
          {/* Endorsements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {endorsements.map((endorsement, index) => (
              <div key={index} className="group bg-[#F7F7F7] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <img 
                    src={endorsement.image} 
                    alt={endorsement.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#292B87] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {endorsement.name}
                    </h3>
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

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-[#1C1C1C] mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Rejoignez les centaines de résidents qui soutiennent notre vision'
                : 'Join hundreds of residents who support our vision'
              }
            </p>
            <button className="bg-[#0090D1] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#292B87] transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' ? 'Ajouter votre soutien' : 'Add your endorsement'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Endorsements;