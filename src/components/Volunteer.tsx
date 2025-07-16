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
    
    // Show success message or redirect
    alert(language === 'fr' ? 'Merci ! Nous vous contacterons bientôt.' : 'Thank you! We\'ll be in touch soon.');
  };

  const interests = [
    {
      id: 'canvassing',
      label: language === 'fr' ? 'Porte-à-porte' : 'Door-to-door canvassing',
      description: language === 'fr' ? 'Rencontrer les électeurs dans le quartier' : 'Meet voters in the neighborhood'
    },
    {
      id: 'events',
      label: language === 'fr' ? 'Organisation d\'événements' : 'Event organization',
      description: language === 'fr' ? 'Aider à organiser des événements de campagne' : 'Help organize campaign events'
    },
    {
      id: 'phone-banking',
      label: language === 'fr' ? 'Appels téléphoniques' : 'Phone banking',
      description: language === 'fr' ? 'Contacter les électeurs par téléphone' : 'Contact voters by phone'
    },
    {
      id: 'digital',
      label: language === 'fr' ? 'Médias sociaux' : 'Social media',
      description: language === 'fr' ? 'Aider avec les médias sociaux et le marketing numérique' : 'Help with social media and digital marketing'
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#292B87] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {language === 'fr' ? 'Bénévolat' : 'Volunteer'}
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
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'fr' ? 'Prénom' : 'First Name'} *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#292B87] focus:border-transparent"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'fr' ? 'Nom de famille' : 'Last Name'} *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#292B87] focus:border-transparent"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'fr' ? 'Adresse courriel' : 'Email Address'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#292B87] focus:border-transparent"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'fr' ? 'Numéro de téléphone' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#292B87] focus:border-transparent"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  {language === 'fr' ? 'Comment aimeriez-vous contribuer ?' : 'How would you like to contribute?'}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest.id} className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id={interest.id}
                        checked={formData.interests.includes(interest.id)}
                        onChange={() => handleInterestChange(interest.id)}
                        className="mt-1 h-4 w-4 text-[#292B87] focus:ring-[#292B87] border-gray-300 rounded"
                      />
                      <div>
                        <label htmlFor={interest.id} className="text-sm font-medium text-gray-900 cursor-pointer">
                          {interest.label}
                        </label>
                        <p className="text-xs text-gray-500 mt-1">{interest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'fr' ? 'Message (optionnel)' : 'Message (optional)'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#292B87] focus:border-transparent"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  placeholder={language === 'fr' ? 'Dites-nous en plus sur votre motivation...' : 'Tell us more about your motivation...'}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#292B87] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0090D1] transition-all duration-200 transform hover:scale-105"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {language === 'fr' ? 'Envoyer ma candidature' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              {language === 'fr' 
                ? 'Des questions ? Contactez notre coordinateur bénévole :' 
                : 'Questions? Contact our volunteer coordinator:'
              }
            </p>
            <div className="space-y-2">
              <p className="text-[#292B87] font-semibold">coordinator@alexandreteo.ca</p>
              <p className="text-gray-600">(514) 555-0123</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;