import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-[#F7F7F7] rounded-full p-1 border border-gray-200">
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
          language === 'fr'
            ? 'bg-[#292B87] text-white shadow-sm'
            : 'text-[#1C1C1C] hover:bg-gray-200'
        } px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm`}
        style={{ fontFamily: 'Open Sans, sans-serif' }}
      >
        FR
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-[#292B87] text-white shadow-sm'
            : 'text-[#1C1C1C] hover:bg-gray-200'
        } px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm`}
        style={{ fontFamily: 'Open Sans, sans-serif' }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;