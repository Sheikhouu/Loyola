import React from 'react';
import { useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import CitizenVote from './components/CitizenVote';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';

function App() {
  const { language } = useLanguage();
  
  // Set document language
  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <CitizenVote />
      <News />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default App;