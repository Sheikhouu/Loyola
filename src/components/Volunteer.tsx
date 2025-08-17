import React from 'react';
import { Heart, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

const Volunteer = () => {
  const { language } = useLanguage();

  const handleVolunteerClick = () => {
    // Lien vers le formulaire de bénévolat d'Alexandre Teo
    window.open('https://monelection.org/form/volunteer/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank');
  };

  return (
    <section id="volunteer" className="py-24 bg-gradient-to-br from-[#330066] to-[#330066]/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <div className="mb-16 animate-fade-in">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Devenir Bénévole' : 'Become a Volunteer'}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Rejoignez l\'équipe d\'Ensemble Montréal et participez à la transformation de notre ville'
                : 'Join the Ensemble Montréal team and participate in transforming our city'
              }
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Engagement Communautaire' : 'Community Engagement'}
              </h3>
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' 
                  ? 'Participez aux événements locaux et aidez à renforcer les liens dans votre communauté'
                  : 'Participate in local events and help strengthen bonds in your community'
                }
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Impact Local' : 'Local Impact'}
              </h3>
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' 
                  ? 'Contribuez directement à l\'amélioration de la qualité de vie dans votre arrondissement'
                  : 'Contribute directly to improving quality of life in your borough'
                }
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Développement Personnel' : 'Personal Development'}
              </h3>
              <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' 
                  ? 'Développez vos compétences en leadership et en organisation d\'événements'
                  : 'Develop your leadership and event organization skills'
                }
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Prêt à vous engager ?' : 'Ready to get involved?'}
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Rejoignez l\'équipe d\'Ensemble Montréal et participez à la campagne électorale. Votre aide fait la différence !'
                : 'Join the Ensemble Montréal team and participate in the electoral campaign. Your help makes a difference!'
              }
            </p>
            
            <button
              onClick={handleVolunteerClick}
              className="group bg-white text-[#330066] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {language === 'fr' ? 'Devenir Bénévole' : 'Become a Volunteer'}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <p className="text-sm text-white/70 mt-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Vous serez redirigé vers le formulaire officiel d\'Ensemble Montréal'
                : 'You will be redirected to the official Ensemble Montréal form'
              }
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-white/80">
            <p className="text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Pour plus d\'informations sur le bénévolat, contactez-nous directement'
                : 'For more information about volunteering, contact us directly'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;