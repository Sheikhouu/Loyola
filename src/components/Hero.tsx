import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Location Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-[#F7F7F7] rounded-full text-[#292B87] font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <MapPin className="w-4 h-4 mr-2 text-[#0090D1]" />
                {language === 'fr' ? 'Arrondissement Loyola, Montréal' : 'Loyola District, Montreal'}
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#292B87] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? (
                  <>
                    Pour une Loyola<br />
                    <span className="text-[#0090D1]">plus juste</span>
                  </>
                ) : (
                  <>
                    For a fairer<br />
                    <span className="text-[#0090D1]">Loyola</span>
                  </>
                )}
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-[#1C1C1C] leading-relaxed max-w-2xl" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' 
                  ? 'Alexandre Teodoresco, candidat au conseil municipal avec Ensemble Montréal pour une communauté plus verte, plus solidaire et plus inclusive.'
                  : 'Alexandre Teodoresco, city council candidate with Ensemble Montréal for a greener, more united and inclusive community.'
                }
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="group inline-flex items-center bg-[#292B87] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0090D1] transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? 'Découvrir notre vision' : 'Discover our vision'}
                  <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => window.open('https://monelection.org/form/member/EcTkQougzqf4T32A9Km25W4zCV2aAz', '_blank')}
                  className="inline-flex items-center border-2 border-[#292B87] text-[#292B87] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#292B87] hover:text-white transition-all duration-300"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? 'S\'impliquer' : 'Get involved'}
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" 
                  alt="Alexandre Teodoresco" 
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
              {/* Background Elements */}
              <div className="absolute -top-8 -right-8 w-full h-full bg-[#0090D1] rounded-3xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#292B87] rounded-full -z-20"></div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="text-center p-8 bg-[#F7F7F7] rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                15+
              </div>
              <div className="text-[#1C1C1C] font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' ? 'Années d\'engagement communautaire' : 'Years of community engagement'}
              </div>
            </div>
            <div className="text-center p-8 bg-[#F7F7F7] rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                500+
              </div>
              <div className="text-[#1C1C1C] font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' ? 'Familles rencontrées' : 'Families met'}
              </div>
            </div>
            <div className="text-center p-8 bg-[#F7F7F7] rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                8
              </div>
              <div className="text-[#1C1C1C] font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {language === 'fr' ? 'Priorités pour Loyola' : 'Priorities for Loyola'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;