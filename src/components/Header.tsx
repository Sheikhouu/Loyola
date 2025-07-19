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
      // Sur mobile, le header est toujours visible
      if (window.innerWidth < 768) {
        setIsVisible(true);
        return;
      }
      
      // Sur desktop/tablette, détecte si on a dépassé la hauteur de l'écran (section hero)
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Affiche le header quand on commence à dépasser la hero section
      setIsVisible(scrollY > heroHeight - 100); // -100px pour une transition plus douce
    };

    // Initialiser l'état sur mobile
    if (window.innerWidth < 768) {
      setIsVisible(true);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
    { id: 'citizen-vote', label: language === 'fr' ? 'Vote Citoyen' : 'Citizen Vote' },
    { id: 'news', label: 'Médias' },
    { id: 'volunteer', label: language === 'fr' ? 'Bénévole' : 'Volunteer' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 backdrop-blur-md bg-white/95 shadow-lg' 
          : '-translate-y-full opacity-0'
      } border-b border-[#330066]/20`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo SVG à gauche - optimisé mobile */}
          <div className="flex items-center">
            <img 
              src={headerSvg}
              alt={language === 'fr' ? 'Logo Français' : 'English Logo'}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#1C1C1C] hover:text-[#330066] font-medium transition-all duration-300 text-sm xl:text-base relative group"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#330066] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank')}
              className="bg-[#330066] text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm xl:text-base"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('donate', language)}
            </button>
          </nav>

          {/* Language Switcher et Menu Mobile */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageSwitcher />
            
            {/* Menu Mobile Button - optimisé */}
            <button
              className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-[#330066]/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-[#1C1C1C] transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-[#1C1C1C] transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile - optimisé */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#330066]/20 py-3 sm:py-4 bg-white/95 backdrop-blur-md animate-fade-in-down">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-[#1C1C1C] hover:text-[#330066] font-medium transition-all duration-300 py-2 px-2 text-base sm:text-lg hover:bg-[#330066]/5 rounded-lg"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-[#330066]/20">
                <button
                  onClick={() => {
                    window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="text-left bg-[#330066] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 w-fit text-sm sm:text-base transform hover:scale-105"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {t('donate', language)}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;