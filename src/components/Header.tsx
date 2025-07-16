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
      setIsVisible(scrollY > heroHeight - 100); // -100px pour une transition plus fluide
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { key: 'about', section: 'about' },
    { key: 'platform', section: 'platform' },
    { key: 'endorsements', section: 'endorsements' },
    { key: 'media', section: 'media' },
    { key: 'volunteer', section: 'volunteer' },
    { key: 'donate', section: '', isExternal: true }
  ];

  // SVG selon la langue
  const headerSvg = language === 'fr' ? '/svg_s/svg_fr.svg' : '/svg_s/svg_en.svg';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white shadow-lg py-3 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* SVG Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src={headerSvg}
                alt={language === 'fr' ? 'Logo Alexandre Teo' : 'Alexandre Teo Logo'}
                className="h-8 md:h-10 w-auto"
              />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden lg:flex space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    if (item.isExternal) {
                      window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank');
                    } else {
                      scrollToSection(item.section);
                    }
                  }}
                  className="text-[#1C1C1C] hover:text-[#0090D1] transition-colors duration-200 font-medium relative group"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {t(item.key as any, language)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0090D1] transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
            
            {/* Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#292B87] hover:text-[#0090D1] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    if (item.isExternal) {
                      window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank');
                    } else {
                      scrollToSection(item.section);
                    }
                  }}
                  className="text-left text-[#1C1C1C] hover:text-[#0090D1] transition-colors duration-200 font-medium"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {t(item.key as any, language)}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;