import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Structure verticale */}
          <div className="flex flex-col">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl md:text-3xl font-bold text-[#292B87] hover:text-[#0090D1] transition-colors duration-200 leading-tight" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              ALEXANDRE TEO
            </button>
            <span className="text-[#0090D1] font-medium text-sm md:text-base tracking-wide">
              pour NEW YORK CITY
            </span>
          </div>
          
          {/* Desktop Navigation - Plus compacte et alignée */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <nav className="flex items-center space-x-6 xl:space-x-8">
              {[
                { key: 'about', section: 'about', label: 'À PROPOS' },
                { key: 'platform', section: 'platform', label: 'PLATEFORME' },
                { key: 'endorsements', section: 'endorsements', label: 'ENDOSSEMENTS' },
                { key: 'media', section: 'media', label: 'PRESSE' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="text-[#1C1C1C] hover:text-[#0090D1] transition-colors duration-200 font-semibold text-sm xl:text-base tracking-wide uppercase relative group"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? item.label : t(item.key as any, language)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0090D1] transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
              
              {/* Dropdown pour Bénévole */}
              <div className="relative group">
                <button
                  onClick={() => scrollToSection('volunteer')}
                  className="flex items-center text-[#1C1C1C] hover:text-[#0090D1] transition-colors duration-200 font-semibold text-sm xl:text-base tracking-wide uppercase relative"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? 'BÉNÉVOLE' : t('volunteer', language)}
                  <ChevronDown size={16} className="ml-1" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0090D1] transition-all duration-200 group-hover:w-full"></span>
                </button>
              </div>
            </nav>
            
            {/* Donate Button - Style orange comme dans l'image */}
            <button
              onClick={() => scrollToSection('donate')}
              className="bg-[#FF8C00] text-white px-6 py-2.5 rounded-full font-bold text-sm xl:text-base tracking-wide uppercase hover:bg-[#FF7A00] transition-all duration-300 transform hover:scale-105 shadow-md"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {language === 'fr' ? 'DONATE' : t('donate', language)}
            </button>
            
            {/* Language Switcher */}
            <div>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#292B87] hover:text-[#0090D1] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-6">
              {[
                { key: 'about', section: 'about', label: 'À PROPOS' },
                { key: 'platform', section: 'platform', label: 'PLATEFORME' },
                { key: 'endorsements', section: 'endorsements', label: 'ENDOSSEMENTS' },
                { key: 'media', section: 'media', label: 'PRESSE' },
                { key: 'volunteer', section: 'volunteer', label: 'BÉNÉVOLE' },
                { key: 'donate', section: 'donate', label: 'DONATE' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="text-left text-[#1C1C1C] hover:text-[#0090D1] transition-colors duration-200 font-semibold text-lg uppercase tracking-wide"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? item.label : t(item.key as any, language)}
                </button>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;