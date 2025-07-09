import React from 'react';
import { ArrowRight, MapPin, Users, Heart, Star } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0090D1]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#292B87]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Announcement Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-[#F7F7F7] rounded-full text-[#292B87] font-medium shadow-sm border border-[#0090D1]/20" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <Star className="w-4 h-4 mr-2 text-[#0090D1]" />
                {language === 'fr' ? 'Candidat Ensemble Montréal 2024' : 'Ensemble Montréal Candidate 2024'}
              </div>
              
              {/* Main Headline - More Dynamic */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#292B87] leading-[0.9]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? (
                  <>
                    Pour une<br />
                    <span className="text-[#0090D1] relative">
                      Loyola
                      <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#0090D1]/20 rounded-full"></div>
                    </span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#292B87] to-[#0090D1]">
                      plus juste
                    </span>
                  </>
                ) : (
                  <>
                    For a<br />
                    <span className="text-[#0090D1] relative">
                      fairer
                      <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#0090D1]/20 rounded-full"></div>
                    </span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#292B87] to-[#0090D1]">
                      Loyola
                    </span>
                  </>
                )}
              </h1>
              
              {/* Powerful Subtitle */}
              <p className="text-xl md:text-2xl text-[#1C1C1C] leading-relaxed max-w-2xl font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {t('heroTitle', language)}
              </p>
              
              {/* CTA Buttons - More Prominent */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('volunteer')}
                  className="group inline-flex items-center bg-[#0090D1] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#292B87] transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {t('getInvolved', language)}
                  <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => scrollToSection('donate')}
                  className="inline-flex items-center border-3 border-[#0090D1] text-[#0090D1] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#0090D1] hover:text-white transition-all duration-300"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {t('donateNow', language)}
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center text-[#1C1C1C]/70" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Users className="w-5 h-5 mr-2 text-[#0090D1]" />
                  <span className="font-semibold text-[#292B87]">2,500+</span>
                  <span className="ml-1">{language === 'fr' ? 'soutiens' : 'supporters'}</span>
                </div>
                <div className="flex items-center text-[#1C1C1C]/70" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <MapPin className="w-5 h-5 mr-2 text-[#0090D1]" />
                  <span className="font-semibold text-[#292B87]">15+</span>
                  <span className="ml-1">{language === 'fr' ? 'années à Loyola' : 'years in Loyola'}</span>
                </div>
                <div className="flex items-center text-[#1C1C1C]/70" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Heart className="w-5 h-5 mr-2 text-[#0090D1]" />
                  <span className="font-semibold text-[#292B87]">100%</span>
                  <span className="ml-1">{language === 'fr' ? 'pour Loyola' : 'for Loyola'}</span>
                </div>
              </div>
            </div>
            
            {/* Right Image - More Dynamic */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Image */}
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" 
                    alt="Alexandre Teodoresco" 
                    className="w-full rounded-3xl shadow-2xl"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0090D1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        8
                      </div>
                      <div className="text-sm text-[#1C1C1C]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {language === 'fr' ? 'Priorités' : 'Priorities'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-[#0090D1] rounded-2xl p-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        500+
                      </div>
                      <div className="text-sm text-white/90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {language === 'fr' ? 'Familles' : 'Families'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-[#0090D1] to-[#292B87] rounded-3xl -z-10 opacity-90"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#0090D1]/20 rounded-full -z-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;