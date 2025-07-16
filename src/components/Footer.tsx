import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';
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
    <footer className="bg-[#292B87] text-white">
      {/* Donate Section */}
      <section id="donate" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Heart className="w-16 h-16 text-[#0090D1] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('supportCampaign', language)}
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {t('supportDescription', language)}
            </p>
            
            {/* Donation Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-3xl font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  $25
                </div>
                <p className="text-white/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('basicSupport', language)}
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#0090D1]">
                <div className="text-3xl font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  $100
                </div>
                <p className="text-white/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('recommendedSupport', language)}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-3xl font-bold text-[#0090D1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  $250
                </div>
                <p className="text-white/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('generousSupport', language)}
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => window.open('https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708', '_blank')}
              className="group bg-[#0090D1] text-white px-12 py-4 rounded-full font-semibold text-xl hover:bg-white hover:text-[#292B87] transition-all duration-300 transform hover:scale-105 shadow-2xl" 
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {t('donateNow', language)}
              <ArrowRight className="inline-block ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="border-t border-white/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Alexandre Teo
                </h3>
                <p className="text-[#0090D1] font-medium mb-6 text-lg">
                  Ensemble Montréal – {t('councillorTitle', language)}
                </p>
                <p className="text-white/80 mb-8 leading-relaxed max-w-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {t('togetherVision', language)}
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#0090D1] transition-colors duration-200" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#0090D1] transition-colors duration-200" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#0090D1] transition-colors duration-200" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#0090D1] transition-colors duration-200" aria-label="Twitter">
                    <Twitter size={20} />
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
                    { key: 'platform', section: 'platform' },
                    { key: 'endorsements', section: 'endorsements' },
                    { key: 'news', section: 'news' },
                    { key: 'volunteer', section: 'volunteer' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.section)}
                      className="block text-white/80 hover:text-[#0090D1] transition-colors duration-200"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {t(item.key as any, language)}
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
                  <a href="mailto:info@alexandreteo.ca" className="flex items-center text-white/80 hover:text-[#0090D1] transition-colors duration-200" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    <Mail size={18} className="mr-3" />
                    info@alexandreteo.ca
                  </a>
                  <a href="tel:514-555-0123" className="flex items-center text-white/80 hover:text-[#0090D1] transition-colors duration-200" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    <Phone size={18} className="mr-3" />
                    (514) 555-0123
                  </a>
                  <div className="flex items-start text-white/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    <MapPin size={18} className="mr-3 mt-1" />
                    <span>
                      {t('campaignOffice', language)}<br />
                      123 Loyola Avenue<br />
                      Montreal, QC H4V 1A1
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-white/70 mb-4 md:mb-0" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <p>{t('copyright', language)}</p>
                  <p className="mt-1">{t('authorized', language)}</p>
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-white/70 hover:text-[#0090D1] transition-colors duration-200" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('privacyPolicy', language)}
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#0090D1] transition-colors duration-200" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('termsOfUse', language)}
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#0090D1] transition-colors duration-200" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {t('financialDisclosure', language)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;