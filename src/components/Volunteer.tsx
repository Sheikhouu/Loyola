import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Volunteer = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [] as string[],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interests: [],
      message: ''
    });
    
    // Show success message
    alert(language === 'fr' 
      ? 'Merci pour votre intérêt ! Nous vous contacterons bientôt.'
      : 'Thank you for your interest! We will contact you soon.'
    );
  };

  const interests = language === 'fr' ? [
    'Porte-à-porte',
    'Appels téléphoniques',
    'Médias sociaux',
    'Événements',
    'Distribution de matériel',
    'Traduction',
    'Autres'
  ] : [
    'Door-to-door',
    'Phone calls',
    'Social media',
    'Events',
    'Material distribution',
    'Translation',
    'Other'
  ];

  return (
    <section id="volunteer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {language === 'fr' ? 'Rejoignez notre équipe' : 'Join our team'}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Votre engagement peut faire la différence dans notre communauté. Ensemble, construisons un avenir meilleur pour Loyola.'
                : 'Your commitment can make a difference in our community. Together, let\'s build a better future for Loyola.'
              }
            </p>
          </div>

          {/* Volunteer Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' ? 'Prénom' : 'First Name'} *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0090D1] focus:border-transparent"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' ? 'Nom' : 'Last Name'} *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0090D1] focus:border-transparent"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' ? 'Courriel' : 'Email'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0090D1] focus:border-transparent"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' ? 'Téléphone' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0090D1] focus:border-transparent"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {language === 'fr' ? 'Domaines d\'intérêt' : 'Areas of Interest'}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-4 h-4 text-[#0090D1] border-gray-300 rounded focus:ring-[#0090D1]"
                      />
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {language === 'fr' ? 'Message (optionnel)' : 'Message (optional)'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={language === 'fr' 
                    ? 'Dites-nous en plus sur votre motivation...'
                    : 'Tell us more about your motivation...'
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0090D1] focus:border-transparent resize-none"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#292B87] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0090D1] transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? 'Rejoindre l\'équipe' : 'Join the team'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;