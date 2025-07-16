import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  // Image et SVG selon la langue
  const heroImage = language === 'fr' ? '/content_hero/1.jpg' : '/content_hero/2.jpg';
  const heroSvg = language === 'fr' ? '/svg_s/svg_fr.svg' : '/svg_s/svg_en.svg';

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Image de fond sur toute la section */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage}
          alt={language === 'fr' ? 'Campagne Alexandre Teo' : 'Alexandre Teo Campaign'}
          className="w-full h-full object-cover"
        />
        
        {/* SVG tout en haut sans padding */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
          <img 
            src={heroSvg}
            alt={language === 'fr' ? 'Logo Français' : 'English Logo'}
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>
        
        {/* Bouton "Faire un don" en bas à gauche */}
        <div className="absolute bottom-8 left-8 z-10">
          <button 
            className="bg-[#292B87] hover:bg-[#0090D1] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://donate.example.com', '_blank')}
          >
            {language === 'fr' ? 'Faire un don' : 'Donate'}
          </button>
        </div>
        
        {/* Overlay avec gradient pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;