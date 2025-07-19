import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  // Image et SVG selon la langue
  const heroImage = language === 'fr' ? '/content_hero/1.jpg' : '/content_hero/2.jpg';
  const heroSvg = language === 'fr' ? '/svg_s/svg_fr.svg' : '/svg_s/svg_en.svg';

  return (
    <section className="hidden md:block relative min-h-screen flex items-center justify-center bg-white">
      {/* Image de fond */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage}
          alt={language === 'fr' ? 'Campagne Alexandre Teo' : 'Alexandre Teo Campaign'}
          className="w-full h-full object-cover"
        />
        
        {/* SVG tout en haut avec animation d'apparition */}
        <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-down">
          <img 
            src={heroSvg}
            alt={language === 'fr' ? 'Logo Français' : 'English Logo'}
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto drop-shadow-lg"
          />
        </div>
        
        {/* Bouton "Faire un don" avec animation et couleurs optimisées */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 z-10 animate-fade-in-up">
          <button 
            className="bg-[#330066] hover:bg-[#330066]/80 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform"
            onClick={() => window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank')}
          >
            {language === 'fr' ? 'Faire un don' : 'Donate'}
          </button>
        </div>
        
        {/* Scroll Indicator avec animation améliorée */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-up">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center shadow-lg backdrop-blur-sm bg-white/10">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;