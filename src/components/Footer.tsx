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
    <footer className="bg-[#292B87] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Campaign Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Alexandre Teodoresco
              </h3>
              <p className="text-white/80 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {t('councillorTitle', language)}
              </p>
              <p className="text-white/70 mb-6 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {t('togetherVision', language)}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-[#0090D1] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-[#0090D1] transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/alexandreteo" 
                  className="bg-white/10 p-3 rounded-full hover:bg-[#0090D1] transition-colors duration-200"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-[#0090D1] transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('navigation', language)}
              </h4>
              <div className="space-y-3">
                {[
                  { key: 'about', section: 'about' },
                  { key: 'news', section: 'news' },
                  { key: 'volunteer', section: 'volunteer' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.section)}
                    className="block text-white/80 hover:text-[#0090D1] transition-colors duration-200"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {item.key === 'news' ? 'Médias' : t(item.key as any, language)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {t('contactUs', language)}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#0090D1]" />
                  <a 
                    href="mailto:info@alexandreteo.ca" 
                    className="text-white/80 hover:text-[#0090D1] transition-colors duration-200"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    info@alexandreteo.ca
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#0090D1]" />
                  <a 
                    href="tel:+15145550123" 
                    className="text-white/80 hover:text-[#0090D1] transition-colors duration-200"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    (514) 555-0123
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#0090D1] mt-1" />
                  <span className="text-white/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('campaignOffice', language)}<br />
                    Loyola, Montréal
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Donation CTA */}
          <div className="bg-white/10 rounded-2xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('supportCampaign', language)}
            </h3>
            <p className="text-white/80 mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('supportDescription', language)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#0090D1] mb-2">$25</div>
                <div className="text-sm text-white/70">{t('basicSupport', language)}</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border-2 border-[#0090D1]">
                <div className="text-2xl font-bold text-[#0090D1] mb-2">$100</div>
                <div className="text-sm text-white/70">{t('recommendedSupport', language)}</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#0090D1] mb-2">$250</div>
                <div className="text-sm text-white/70">{t('generousSupport', language)}</div>
              </div>
            </div>
            <button 
              onClick={() => window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank')}
              className="bg-[#0090D1] text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#292B87] transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('donate', language)}
            </button>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/60 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('copyright', language)}
                </p>
                <p className="text-white/60 text-sm mt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('authorized', language)}
                </p>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-[#0090D1] transition-colors duration-200">
                  {t('privacyPolicy', language)}
                </a>
                <a href="#" className="text-white/60 hover:text-[#0090D1] transition-colors duration-200">
                  {t('termsOfUse', language)}
                </a>
                <a href="#" className="text-white/60 hover:text-[#0090D1] transition-colors duration-200">
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