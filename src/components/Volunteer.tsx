import React from 'react';
import { Users, Calendar, Phone, Share2, ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../translations';

const Volunteer = () => {
  const { language } = useLanguage();
  
  const volunteerActivities = [
    {
      icon: Users,
      titleKey: 'doorToDoor',
      descKey: 'doorToDoorDesc',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Calendar,
      titleKey: 'eventOrganization',
      descKey: 'eventOrganizationDesc',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Phone,
      titleKey: 'phoneBanking',
      descKey: 'phoneBankingDesc',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Share2,
      titleKey: 'digitalOutreach',
      descKey: 'digitalOutreachDesc',
      gradient: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <section id="volunteer" className="py-24 bg-gradient-to-br from-[#F7F7F7] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0090D1] rounded-full mb-8">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('volunteerTitle', language)}
            </h2>
            <div className="w-24 h-1 bg-[#0090D1] mx-auto mb-8"></div>
            <p className="text-2xl font-semibold text-[#292B87] mb-4 max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('volunteerSubtitle', language)}
            </p>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('volunteerDescription', language)}
            </p>
          </div>
          
          {/* Volunteer Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {volunteerActivities.map((activity, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className={`w-16 h-16 ${activity.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon className={`w-8 h-8 ${activity.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#292B87] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {t(activity.titleKey as any, language)}
                  </h3>
                  <p className="text-[#1C1C1C] leading-relaxed mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t(activity.descKey as any, language)}
                  </p>
                  <div className={`w-full h-1 bg-gradient-to-r ${activity.gradient} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-[#292B87] to-[#0090D1] rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Prêt à faire la différence ?' : 'Ready to Make a Difference?'}
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Rejoignez des centaines de bénévoles qui s\'investissent déjà pour construire une Loyola meilleure.'
                : 'Join hundreds of volunteers who are already investing to build a better Loyola.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center bg-white text-[#292B87] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {t('signUpVolunteer', language)}
                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <a 
                href="mailto:benevoles@alexandreteo.ca"
                className="inline-flex items-center border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#292B87] transition-all duration-300"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <Mail className="mr-3 w-5 h-5" />
                {language === 'fr' ? 'Nous contacter' : 'Contact Us'}
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-[#292B87] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Coordonnateur bénévole' : 'Volunteer Coordinator'}
              </h4>
              <p className="text-[#1C1C1C] mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {t('volunteerContact', language)}
              </p>
              <div className="space-y-3">
                <a href="mailto:benevoles@alexandreteo.ca" className="flex items-center text-[#0090D1] hover:text-[#292B87] transition-colors duration-200" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Mail className="w-5 h-5 mr-3" />
                  benevoles@alexandreteo.ca
                </a>
                <a href="tel:514-555-0123" className="flex items-center text-[#0090D1] hover:text-[#292B87] transition-colors duration-200" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Phone className="w-5 h-5 mr-3" />
                  (514) 555-VOTE
                </a>
              </div>
            </div>
            
            <div className="bg-[#F7F7F7] rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-[#292B87] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Heures de bénévolat' : 'Volunteer Hours'}
              </h4>
              <div className="space-y-3 text-[#1C1C1C]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <div className="flex justify-between">
                  <span>{language === 'fr' ? 'Lundi - Vendredi:' : 'Monday - Friday:'}</span>
                  <span className="font-semibold">18h - 21h</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'fr' ? 'Samedi:' : 'Saturday:'}</span>
                  <span className="font-semibold">9h - 17h</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'fr' ? 'Dimanche:' : 'Sunday:'}</span>
                  <span className="font-semibold">10h - 16h</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#0090D1]/10 rounded-xl">
                <p className="text-sm text-[#292B87] font-medium" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {language === 'fr' 
                    ? '💡 Astuce: Les formations bénévoles ont lieu chaque samedi matin!'
                    : '💡 Tip: Volunteer training sessions are every Saturday morning!'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;