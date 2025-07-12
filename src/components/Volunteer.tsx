import React from 'react';
import { Users, Calendar, Phone, Mail, ArrowRight, Heart, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.tsx';
import { t } from '../translations';

const Volunteer = () => {
  const { language } = useLanguage();
  
  const volunteerOpportunities = [
    {
      icon: Users,
      titleKey: 'doorToDoor',
      descKey: 'doorToDoorDesc',
      time: language === 'fr' ? '2-4 heures/semaine' : '2-4 hours/week',
      color: 'bg-blue-500'
    },
    {
      icon: Calendar,
      titleKey: 'eventOrganization',
      descKey: 'eventOrganizationDesc',
      time: language === 'fr' ? '1-2 heures/semaine' : '1-2 hours/week',
      color: 'bg-green-500'
    },
    {
      icon: Phone,
      titleKey: 'phoneBanking',
      descKey: 'phoneBankingDesc',
      time: language === 'fr' ? '1-3 heures/semaine' : '1-3 hours/week',
      color: 'bg-purple-500'
    },
    {
      icon: Mail,
      titleKey: 'digitalOutreach',
      descKey: 'digitalOutreachDesc',
      time: language === 'fr' ? 'Flexible' : 'Flexible',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    {
      number: '150+',
      label: language === 'fr' ? 'Bénévoles actifs' : 'Active volunteers'
    },
    {
      number: '25',
      label: language === 'fr' ? 'Événements organisés' : 'Events organized'
    },
    {
      number: '2000+',
      label: language === 'fr' ? 'Portes visitées' : 'Doors visited'
    }
  ];

  return (
    <section id="volunteer" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('volunteerTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-6"></div>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('volunteerSubtitle', language)}
            </p>
            <p className="text-lg text-[#1C1C1C] max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('volunteerDescription', language)}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-[#F7F7F7] p-8 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-[#1C1C1C] font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Volunteer Opportunities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="group bg-[#F7F7F7] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className={`w-16 h-16 ${opportunity.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <opportunity.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#292B87] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {t(opportunity.titleKey as any, language)}
                    </h3>
                    <p className="text-[#1C1C1C] mb-4 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {t(opportunity.descKey as any, language)}
                    </p>
                    <div className="flex items-center text-[#0090D1] font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      <span style={{ fontFamily: 'Open Sans, sans-serif' }}>{opportunity.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="bg-[#292B87] text-white p-12 rounded-3xl text-center">
            <Heart className="w-16 h-16 text-[#0090D1] mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Prêt à faire la différence ?' : 'Ready to make a difference?'}
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Rejoignez notre équipe de bénévoles passionnés et aidez-nous à construire une Loyola meilleure pour tous.'
                : 'Join our team of passionate volunteers and help us build a better Loyola for everyone.'
              }
            </p>
            <button className="group bg-[#0090D1] text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#292B87] transition-all duration-300 transform hover:scale-105 shadow-lg mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('signUpVolunteer', language)}
              <ArrowRight className="inline-block ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            {/* Contact Info */}
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/80 mb-6 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {t('volunteerContact', language)}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="mailto:volunteer@alexandreteo.ca" className="group inline-flex items-center text-[#0090D1] hover:text-white transition-colors duration-200 font-medium text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Mail size={20} className="mr-3" />
                  volunteer@alexandreteo.ca
                </a>
                <a href="tel:514-555-0123" className="group inline-flex items-center text-[#0090D1] hover:text-white transition-colors duration-200 font-medium text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Phone size={20} className="mr-3" />
                  (514) 555-0123
                </a>
                <div className="inline-flex items-center text-white/80 font-medium text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <MapPin size={20} className="mr-3" />
                  {language === 'fr' ? 'Bureau de campagne, Loyola' : 'Campaign Office, Loyola'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;