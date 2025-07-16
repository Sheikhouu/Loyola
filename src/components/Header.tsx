import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Détecte si on a dépassé la hauteur de l'écran (section hero)
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Affiche le header quand on commence à dépasser la hero section
      setIsVisible(scrollY > heroHeight - 100); // -100px pour une transition plus douce
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SVG selon la langue
  const headerSvg = language === 'fr' ? '/svg_s/svg_fr.svg' : '/svg_s/svg_en.svg';

  const navItems = [
    { id: 'about', label: t('about', language) },
    { id: 'news', label: 'Médias' },
    { id: 'volunteer', label: t('volunteer', language) },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      } bg-white shadow-lg border-b border-gray-200`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo SVG à gauche */}
          <div className="flex items-center">
            <img 
              src={headerSvg}
              alt={language === 'fr' ? 'Logo Français' : 'English Logo'}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#1C1C1C] hover:text-[#292B87] font-medium transition-colors duration-200 text-sm xl:text-base"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank')}
              className="bg-[#292B87] text-white px-4 xl:px-6 py-2 rounded-full font-semibold hover:bg-[#0090D1] transition-all duration-200 text-sm xl:text-base"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('donate', language)}
            </button>
          </nav>

          {/* Language Switcher et Menu Mobile */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageSwitcher />
            
            {/* Menu Mobile Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#1C1C1C]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1C1C1C]" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-[#1C1C1C] hover:text-[#292B87] font-medium transition-colors duration-200 py-2 px-2"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank');
                  setIsMenuOpen(false);
                }}
                className="text-left bg-[#292B87] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0090D1] transition-all duration-200 w-fit mt-2"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {t('donate', language)}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;