import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  // Image et SVG selon la langue
  const heroImage = language === 'fr' ? '/content_hero/1.jpg' : '/content_hero/2.jpg';
  const heroSvg = language === 'fr' ? '/svg_s/svg_fr.svg' : '/svg_s/svg_en.svg';

  return (
    <section className="hidden md:block relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Image de fond avec échelle réduite */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage}
          alt={language === 'fr' ? 'Campagne Alexandre Teo' : 'Alexandre Teo Campaign'}
          className="w-full h-full object-cover scale-102 transform transition-transform duration-1000 ease-out"
        />
        
        {/* Overlay pour assurer la lisibilité des éléments superposés */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* SVG tout en haut avec animation d'apparition */}
        <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-down">
          <img 
            src={heroSvg}
            alt={language === 'fr' ? 'Logo Français' : 'English Logo'}
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto drop-shadow-lg"
          />
        </div>
        
        {/* Bouton "Faire un don" */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 z-10 animate-fade-in-up">
          <button 
            className="relative bg-gradient-to-r from-[#330066] via-[#4a1a8a] to-[#330066] hover:from-[#4a1a8a] hover:via-[#5a2a9a] hover:to-[#4a1a8a] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-700 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(51,0,102,0.6)] hover:scale-110 transform animate-pulse hover:animate-none border-2 border-white/20 hover:border-white/40 backdrop-blur-sm overflow-hidden group"
            onClick={() => window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank')}
          >
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Texte du bouton */}
            <span className="relative z-10 drop-shadow-lg">
              {language === 'fr' ? 'Faire un don' : 'Donate'}
            </span>
            
            {/* Icône de don (optionnel) */}
            <span className="relative z-10 ml-2 text-lg">❤️</span>
          </button>
        </div>
        
        {/* Scroll Indicator */}
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