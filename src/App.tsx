import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const { language } = useLanguage();
  
  // Set document language
  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;