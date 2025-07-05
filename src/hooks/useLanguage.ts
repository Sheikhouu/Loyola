import { useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return { language, switchLanguage };
};