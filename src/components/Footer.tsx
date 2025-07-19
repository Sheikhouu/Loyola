import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-[#330066] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Campaign Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Alexandre Teodoresco
                </h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {t('councillorTitle', language)}
                </p>
              <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('togetherVision', language)}
                </p>
                
                {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61577072410719" 
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/alexandre_teodoresco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/alexandreteo" 
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="https://x.com/AlexTeodoresco" 
                  className="bg-white/10 p-2.5 sm:p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('navigation', language)}
                </h4>
              <div className="space-y-2 sm:space-y-3">
                  {[
                    { key: 'about', section: 'about' },
                  { key: 'citizen-vote', section: 'citizen-vote', label: language === 'fr' ? 'Vote Citoyen' : 'Citizen Vote' },
                    { key: 'news', section: 'news' },
  
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.section)}
                    className="block text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                    {item.label || (item.key === 'news' ? 'Médias' : t(item.key as any, language))}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Contact */}
              <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('contactUs', language)}
                </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0" />
                  <a 
                    href="tel:+14388021577" 
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    +1 438 802 1577
                  </a>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm sm:text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {t('campaignOffice', language)}<br />
                    Loyola, Montréal
                    </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Donation CTA */}
          <div className="bg-white/10 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('supportCampaign', language)}
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base px-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('supportDescription', language)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-white/10 p-3 sm:p-4 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">$25</div>
                <div className="text-xs sm:text-sm text-white/70">{t('basicSupport', language)}</div>
              </div>
                              <div className="bg-white/10 p-3 sm:p-4 rounded-lg border-2 border-white/30">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">$100</div>
                <div className="text-xs sm:text-sm text-white/70">{t('recommendedSupport', language)}</div>
              </div>
              <div className="bg-white/10 p-3 sm:p-4 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">$250</div>
                <div className="text-xs sm:text-sm text-white/70">{t('generousSupport', language)}</div>
              </div>
            </div>
            <button 
              onClick={() => window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank')}
              className="bg-white/20 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-[#330066] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('donate', language)}
            </button>
            </div>
            
            {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/60 text-xs sm:text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('copyright', language)}
                </p>
                <p className="text-white/60 text-xs sm:text-sm mt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('authorized', language)}
                </p>
                </div>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                    {t('privacyPolicy', language)}
                  </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                    {t('termsOfUse', language)}
                  </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                    {t('financialDisclosure', language)}
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;