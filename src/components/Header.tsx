import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.tsx';
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
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl md:text-3xl font-bold text-[#292B87] hover:text-[#0090D1] transition-colors duration-200" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Alexandre Teo
            </button>
            <span className="text-[#0090D1] font-medium ml-3 hidden sm:inline text-lg">
              – Ensemble Montréal
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <nav className="hidden lg:flex space-x-8">
              {[
                { key: 'about', section: 'about' },
                { key: 'platform', section: 'platform' },
                { key: 'endorsements', section: 'endorsements' },
                { key: 'media', section: 'media' },
                { key: 'volunteer', section: 'volunteer' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="text-[#1C1C1C] hover:text-[#0090D1] transition-colors duration-200 font-medium text-lg relative group"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {t(item.key as any, language)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0090D1] transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
            
            {/* Donate Button */}
            <button
              onClick={() => scrollToSection('donate')}
              className="hidden md:block bg-[#0090D1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#292B87] transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('donate', language)}
            </button>
            
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
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-6">
              {[
                { key: 'about', section: 'about' },
                { key: 'platform', section: 'platform' },
                { key: 'endorsements', section: 'endorsements' },
                { key: 'media', section: 'media' },
                { key: 'volunteer', section: 'volunteer' },
                { key: 'donate', section: 'donate' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="text-left text-[#1C1C1C] hover:text-[#0090D1] transition-colors duration-200 font-medium text-lg"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {t(item.key as any, language)}
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