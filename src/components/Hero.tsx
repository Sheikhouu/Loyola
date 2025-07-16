import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  // Image et SVG selon la langue
  const heroImage = language === 'fr' ? '/content_hero/1.jpg' : '/content_hero/2.jpg';
  const heroSvg = language === 'fr' ? '/svg_s/svg_fr.svg' : '/svg_s/svg_en.svg';

  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Image de fond responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage}
          alt={language === 'fr' ? 'Campagne Alexandre Teo' : 'Alexandre Teo Campaign'}
          className="w-full h-full object-cover object-center"
        />
        
        {/* Overlay avec gradient adaptatif - Optimisé pour mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50 sm:from-black/25 sm:via-transparent sm:to-black/35 md:from-black/20 md:to-black/30"></div>
        
        {/* Scroll Indicator - Responsive */}
        <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 sm:space-y-3">
            {/* Scroll wheel animation */}
            <div className="w-4 h-6 xs:w-5 xs:h-7 sm:w-6 sm:h-8 md:w-7 md:h-10 border-2 border-white/80 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-0.5 xs:w-1 h-2 xs:h-2.5 sm:h-3 bg-white/80 rounded-full mt-1 xs:mt-1.5 sm:mt-2 animate-bounce"></div>
            </div>
            
            {/* Scroll text - Hidden on very small screens */}
            <span className="hidden xs:block text-white/70 text-xs sm:text-sm font-medium tracking-wide animate-pulse" 
                  style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' ? 'Défiler' : 'Scroll'}
            </span>
            
            {/* Animated arrow */}
            <div className="flex flex-col space-y-1">
              <div className="w-0.5 h-2 xs:h-3 sm:h-4 bg-white/60 animate-pulse delay-100"></div>
              <div className="w-0.5 h-1 xs:h-1.5 sm:h-2 bg-white/40 animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        {/* Message d'accueil centré - Responsive */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            {/* Message principal - Optionnel, peut être activé */}
            <div className="hidden lg:block bg-white/10 backdrop-blur-md rounded-2xl p-6 xl:p-8 border border-white/20">
              <h1 className="text-white text-lg xl:text-xl font-bold mb-4 leading-tight" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' 
                  ? 'Ensemble, construisons une Loyola plus juste, plus verte, plus solidaire'
                  : 'Together, let\'s build a fairer, greener, more united Loyola'
                }
              </h1>
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-4 justify-center">
                <button 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                </button>
                <button 
                  className="bg-[#0090D1]/80 hover:bg-[#0090D1] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
                  onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? 'S\'impliquer' : 'Get Involved'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de progression de scroll - Mobile uniquement */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div className="h-full bg-[#0090D1] transition-all duration-300" style={{ width: '0%' }} id="scroll-progress"></div>
      </div>
    </section>
  );
};

export default Hero;