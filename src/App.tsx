import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Priorities from './components/Priorities';
import Endorsements from './components/Endorsements';
import Press from './components/Media';
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
      <Priorities />
      <Endorsements />
      <Press />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default App;