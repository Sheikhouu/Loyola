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

  const scrollToCitizenVote = () => {
    const element = document.getElementById('citizen-vote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* CTA vers CitizenVote */}
      <section id="cta-section" className="py-12 bg-gradient-to-r from-[#330066] to-[#4a1a8a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {language === 'fr' ? 'Votre voix compte !' : 'Your voice matters!'}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            {language === 'fr' 
              ? 'Découvrez comment participer activement à la démocratie locale'
              : 'Discover how to actively participate in local democracy'
            }
          </p>
          <button
            onClick={scrollToCitizenVote}
            className="group bg-white text-[#330066] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {language === 'fr' ? 'Découvrir le Vote Citoyen' : 'Discover Citizen Vote'}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </section>
      
      <About />
      <Volunteer />
      <CitizenVote />
      <News />
      <Footer />
    </div>
  );
}

export default App;