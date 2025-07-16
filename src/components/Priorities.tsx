import React from 'react';
import { Bus, Shield, Trees, Heart, Home, Briefcase, Settings, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

const Priorities = () => {
  const { language } = useLanguage();
  
  const priorities = [
    {
      icon: Home,
      titleKey: 'affordableHousing',
      descKey: 'affordableHousingDesc',
      color: 'bg-red-500'
    },
    {
      icon: Bus,
      titleKey: 'accessibleTransport',
      descKey: 'accessibleTransportDesc',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      titleKey: 'safeStreets',
      descKey: 'safeStreetsDesc',
      color: 'bg-green-500'
    },
    {
      icon: Trees,
      titleKey: 'greenSpaces',
      descKey: 'greenSpacesDesc',
      color: 'bg-emerald-500'
    },
    {
      icon: Heart,
      titleKey: 'familySupport',
      descKey: 'familySupportDesc',
      color: 'bg-pink-500'
    },
    {
      icon: Settings,
      titleKey: 'municipalServices',
      descKey: 'municipalServicesDesc',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      titleKey: 'youthSupport',
      descKey: 'youthSupportDesc',
      color: 'bg-orange-500'
    },
    {
      icon: Briefcase,
      titleKey: 'localEconomy',
      descKey: 'localEconomyDesc',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="platform" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('platformTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('platformSubtitle', language)}
            </p>
          </div>
          
          {/* Priorities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {priorities.map((priority, index) => (
              <div key={index} className="group bg-[#F7F7F7] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${priority.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <priority.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#292B87] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {t(priority.titleKey as any, language)}
                  </h3>
                  <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t(priority.descKey as any, language)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <button 
              onClick={() => window.open('https://monelection.org/form/member/EcTkQougzqf4T32A9Km25W4zCV2aAz', '_blank')}
              className="bg-[#0090D1] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#292B87] transition-all duration-300 transform hover:scale-105 shadow-lg" 
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('viewDetailedPlan', language)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priorities;