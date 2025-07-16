import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  // Image et SVG selon la langue
  const heroImage = language === 'fr' ? '/content_hero/1.jpg' : '/content_hero/2.jpg';
  const heroSvg = language === 'fr' ? '/svg_s/svg_fr.svg' : '/svg_s/svg_en.svg';

  return (
    <section className="relative h-[45vh] xs:h-[50vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:min-h-screen flex items-center justify-center bg-white overflow-hidden max-h-[400px] xs:max-h-[450px] sm:max-h-[550px] md:max-h-[650px] lg:max-h-none min-h-[350px] xs:min-h-[400px] sm:min-h-[450px]">
      {/* Image de fond responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage}
          alt={language === 'fr' ? 'Campagne Alexandre Teo' : 'Alexandre Teo Campaign'}
          className="w-full h-full object-cover object-center"
        />
        
        {/* Overlay avec gradient adaptatif */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50 sm:from-black/25 sm:via-transparent sm:to-black/35 md:from-black/20 md:to-black/30"></div>
      </div>

      {/* Contenu principal centré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8">
        
        {/* Logo SVG principal - Centré et adaptatif */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">
          <img 
            src={heroSvg}
            alt={language === 'fr' ? 'Alexandre Teodoresco pour Loyola' : 'Alexandre Teodoresco for Loyola'}
            className="h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto max-w-[85vw] sm:max-w-[75vw] md:max-w-[65vw] lg:max-w-[55vw] hero-element-mobile"
          />
          
          {/* Bouton "Faire un don" - Positionné sous le logo */}
          <button 
            onClick={() => window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank')}
            className="bg-[#292B87]/90 hover:bg-[#0090D1]/90 text-white font-bold py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base md:text-lg backdrop-blur-sm border border-white/20 hero-donate-button-mobile hero-element-mobile whitespace-nowrap min-h-[40px] xs:min-h-[44px] sm:min-h-[48px] md:min-h-[52px]"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            {language === 'fr' ? 'Faire un don' : 'Donate'}
          </button>
        </div>
      </div>

      {/* Scroll Indicator - En bas */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          {/* Scroll wheel animation */}
          <div className="w-4 h-6 xs:w-5 xs:h-7 sm:w-6 sm:h-8 md:w-7 md:h-10 border-2 border-white/80 rounded-full flex justify-center relative overflow-hidden hero-element-mobile">
            <div className="w-0.5 xs:w-1 h-2 xs:h-2.5 sm:h-3 bg-white/80 rounded-full mt-1 xs:mt-1.5 sm:mt-2 animate-bounce"></div>
          </div>
          
          {/* Scroll text - Hidden on very small screens */}
          <span className="hidden xs:block text-white/70 text-xs sm:text-sm font-medium tracking-wide animate-pulse hero-element-mobile" 
                style={{ fontFamily: 'Open Sans, sans-serif' }}>
            {language === 'fr' ? 'Défiler' : 'Scroll'}
          </span>
          
          {/* Animated arrow */}
          <div className="flex flex-col space-y-1 hero-element-mobile">
            <div className="w-0.5 h-2 xs:h-3 sm:h-4 bg-white/60 animate-pulse delay-100"></div>
            <div className="w-0.5 h-1 xs:h-1.5 sm:h-2 bg-white/40 animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;