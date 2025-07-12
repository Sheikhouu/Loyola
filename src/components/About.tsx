import React from 'react';
import { Award, BookOpen, Users, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.tsx';
import { t } from '../translations';

const About = () => {
  const { language } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('aboutTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Un leader communautaire dévoué avec une vision claire pour l\'avenir de Loyola.'
                : 'A dedicated community leader with a clear vision for Loyola\'s future.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Un engagement authentique pour notre communauté' : 'Authentic commitment to our community'}
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('aboutBio1', language)}
                  </p>
                  
                  <p className="text-lg text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('aboutBio2', language)}
                  </p>
                  
                  <p className="text-lg text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('aboutBio3', language)}
                  </p>
                </div>
              </div>
              
              {/* Key Points Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-6 h-6 text-[#0090D1] mr-3" />
                    <h4 className="font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Formation' : 'Education'}
                    </h4>
                  </div>
                  <p className="text-[#1C1C1C] text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' ? 'Maîtrise en urbanisme, McGill' : 'Master\'s in Urban Planning, McGill'}
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-3">
                    <Award className="w-6 h-6 text-[#0090D1] mr-3" />
                    <h4 className="font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Expérience' : 'Experience'}
                    </h4>
                  </div>
                  <p className="text-[#1C1C1C] text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' ? '8 ans en transport durable' : '8 years in sustainable transport'}
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-[#0090D1] mr-3" />
                    <h4 className="font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Engagement' : 'Engagement'}
                    </h4>
                  </div>
                  <p className="text-[#1C1C1C] text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' ? 'Leader communautaire actif' : 'Active community leader'}
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-6 h-6 text-[#0090D1] mr-3" />
                    <h4 className="font-bold text-[#292B87]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Résidence' : 'Residence'}
                    </h4>
                  </div>
                  <p className="text-[#1C1C1C] text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' ? 'Loyola depuis 10+ ans' : 'Loyola for 10+ years'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Alexandre Teodoresco" 
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0090D1] rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#292B87] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;