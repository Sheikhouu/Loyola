import React from 'react';
import { Briefcase, GraduationCap, Heart, Users, Globe, Lightbulb, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
// import { t } from '../translations';

const About = () => {
	const { language } = useLanguage();
	const mainVideoRef = React.useRef<HTMLVideoElement>(null);

  const personalInfo = [
    {
      icon: GraduationCap,
      title: language === 'fr' ? 'Formation' : 'Education',
      description: language === 'fr' 
        ? 'Formation solide en gestion, marketing et finance (HEC Montréal) et au Lycée Fustel de Coulange'
        : 'Solid foundation in management, marketing and finance (HEC Montréal) and at Lycée Fustel de Coulange'
    },
    {
      icon: Briefcase,
      title: language === 'fr' ? 'Expertise' : 'Expertise',
      description: language === 'fr' 
        ? 'Innovation, culture, développement économique et transformation numérique avec expérience internationale'
        : 'Innovation, culture, economic development and digital transformation with international experience'
    },
    {
      icon: Globe,
      title: language === 'fr' ? 'Langues' : 'Languages',
      description: language === 'fr' 
        ? 'Parfaitement trilingue : français, anglais et roumain'
        : 'Fully trilingual: French, English and Romanian'
    },
    {
      icon: Target,
      title: language === 'fr' ? 'Vision' : 'Vision',
      description: language === 'fr' 
        ? 'Innovation sociale, transition numérique et co-construction de solutions pour Loyola'
        : 'Social innovation, digital transition and co-construction of solutions for Loyola'
    }
  ];
  
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#F7F7F7] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#330066] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {language === 'fr' ? 'Alexandre Teodoresco' : 'Alexandre Teodoresco'}
            </h2>
            <div className="w-24 h-1 bg-[#330066] mx-auto mb-6"></div>
            <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {language === 'fr' 
                ? 'Un candidat d\'exception pour Loyola, Côte-des-Neiges'
                : 'An exceptional candidate for Loyola, Côte-des-Neiges'
                  }
                </p>
              </div>
                
          <div className="space-y-16">
            
            {/* Section 1 — Main Bio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-slide-up">
                <h3 className="text-3xl font-bold text-[#330066] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Pourquoi Alexandre Teodoresco ?' : 'Why Alexandre Teodoresco?'}
                </h3>
                
				<div className="space-y-6 text-[#1C1C1C]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
					<p className="text-lg leading-relaxed">
						{language === 'fr' 
							? 'Alexandre Teodoresco possède le profil parfait pour représenter le district de Loyola. Fort d\'une double expérience dans l\'innovation, la culture et le développement économique tant au niveau local qu\'international, il propose une vision moderne et pragmatique qui répond spécifiquement aux besoins de ses concitoyens.'
							: "Alexandre Teodoresco has the perfect profile to represent the Loyola district. With dual experience in innovation, culture and economic development at both local and international levels, he offers a modern and pragmatic vision that specifically addresses the needs of his fellow citizens."
						}
					</p>
					<p className="text-lg leading-relaxed">
						{language === 'fr' 
							? 'En somme, Alexandre Teodoresco combine expertise, ouverture et leadership pour porter la voix de Loyola à l\'Hôtel de Ville et bâtir un avenir de qualité pour l’arrondissement de Côte-des-Neiges - NDG, basé sur l’innovation et la qualité de vie.'
							: "In short, Alexandre Teodoresco combines expertise, openness and leadership to carry Loyola's voice to City Hall and build a high-quality future for the Côte-des-Neiges–NDG borough, based on innovation and quality of life."
						}
					</p>
			</div>
          </div>

              <div className="relative animate-slide-up-delay">
                <div className="w-full h-96 bg-[#330066] rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500 overflow-hidden">
					<video
						ref={mainVideoRef}
						src="https://res.cloudinary.com/dznkbutnm/video/upload/v1752920711/WhatsApp_Vid%C3%A9o_2025-07-15_%C3%A0_19.16.34_e844e118_y4ys6q.mp4"
						className="w-full h-full object-cover"
						controls
						loop
						muted
						playsInline
						preload="metadata"
						onLoadedMetadata={() => { if (mainVideoRef.current) { mainVideoRef.current.currentTime = 1; } }}
					/>
                  <div className="absolute inset-0 bg-[#330066]/20 flex items-center justify-center pointer-events-none">
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 — Mission avec Ensemble Montréal */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-[#330066] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Notre Mission avec Ensemble Montréal' : 'Our Mission with Ensemble Montréal'}
                </h3>
				<p className="text-lg text-[#1C1C1C]/80 max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
					{language === 'fr' 
						? 'Ensemble, Alexandre et Soraya Martinez Ferrada travaillent pour un Montréal plus inclusif, innovant et efficace'
						: 'Together, Alexandre and Soraya Martinez Ferrada work for a more inclusive, innovative and efficient Montreal'
					}
				</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-[#330066] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {language === 'fr' ? 'Une Vision Partagée' : 'A Shared Vision'}
                  </h4>
                  
					<div className="space-y-4 text-[#1C1C1C]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
						<p className="text-lg leading-relaxed">
							{language === 'fr' 
								? 'Alexandre Teodoresco s\'engage aux côtés de Soraya Martinez Ferrada, cheffe d\'Ensemble Montréal et candidate à la mairie, pour porter une vision commune de transformation sociale et économique.'
								: 'Alexandre Teodoresco commits alongside Soraya Martinez Ferrada, leader of Ensemble Montréal and mayoral candidate, to carry a shared vision of social and economic transformation.'
							}
						</p>
						<p className="text-lg leading-relaxed">
							{language === 'fr' 
								? "Cette collaboration s'appuie sur des valeurs fortes : l'innovation, la transition numérique, la co-construction de solutions et l'impact positif dans nos communautés."
								: 'This collaboration is based on strong values: innovation, digital transition, co-construction of solutions, and positive impact in our communities.'
							}
						</p>
						<p className="text-lg leading-relaxed">
							{language === 'fr' 
								? 'Ensemble, ils défendent les intérêts de Loyola et de tous les Montréalais pour bâtir une ville plus innovante, prospère et efficace.'
								: 'Together, they defend the interests of Loyola and all Montrealers to build a more innovative, prosperous and efficient city.'
							}
						</p>
					</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                    <img 
                      src="https://res.cloudinary.com/dznkbutnm/image/upload/v1752920708/WhatsApp_Image_2025-07-11_%C3%A0_21.55.10_d70afc26_dwk2l9.jpg"
                      alt={language === 'fr' ? 'Alexandre et Soraya - Ensemble Montréal' : 'Alexandre and Soraya - Ensemble Montréal'}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h5 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {language === 'fr' ? 'Leadership Partagé' : 'Shared Leadership'}
                        </h5>
                        <p className="text-sm opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {language === 'fr' ? 'Vision commune pour Montréal' : 'Shared vision for Montreal'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                    <img 
                      src="https://res.cloudinary.com/dznkbutnm/image/upload/v1752920706/WhatsApp_Image_2025-07-14_%C3%A0_21.09.39_ac1f770e_mclhhc.jpg"
                      alt={language === 'fr' ? 'Engagement Communautaire' : 'Community Engagement'}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h5 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {language === 'fr' ? 'Engagement Local' : 'Local Engagement'}
                        </h5>
                        <p className="text-sm opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {language === 'fr' ? 'Au cœur de la communauté' : 'At the heart of the community'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vidéo de présentation */}
              <div className="mt-12">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
					  <video
                    src="https://res.cloudinary.com/dznkbutnm/video/upload/v1752920709/AQOhssr5Ur4FjbGdVE682fFMiLZtVAMryhFxC7qGttZYreKdGx7R59EYgCnQ1i20Rox5OxEaIU064L9jgg38kgmsM54GaGyz1u-A8lo_mnakkj.mp4"
					    className="w-full h-64 object-contain bg-black"
                    controls
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end pointer-events-none">
                    <div className="p-6 text-white">
                      <h5 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {language === 'fr' ? 'Message d\'Alexandre' : 'Alexandre\'s Message'}
                      </h5>
                      <p className="text-sm opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {language === 'fr' ? 'Sa vision pour Loyola et Montréal' : 'His vision for Loyola and Montreal'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section 3 — Ce qu'Alexandre peut apporter à Loyola */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up-delay-2">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-[#330066] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Ce qu\'Alexandre peut apporter à Loyola' : 'What Alexandre can bring to Loyola'}
                </h3>
                <p className="text-lg text-[#1C1C1C]/80 max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {language === 'fr' 
                    ? 'Des compétences et une vision pour transformer notre quartier'
                    : 'Skills and vision to transform our neighborhood'
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-[#330066]/5 transition-colors duration-300">
                  <Lightbulb className="w-8 h-8 text-[#330066] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-[#330066] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Vision globale' : 'Global vision'}
                    </h4>
                    <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' 
                        ? 'Un pont entre les réalités locales et les meilleures pratiques internationales.'
                        : 'A bridge between local realities and international best practices.'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-[#330066]/5 transition-colors duration-300">
                  <Heart className="w-8 h-8 text-[#330066] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-[#330066] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Engagement authentique' : 'Authentic commitment'}
                    </h4>
                    <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' 
                        ? 'Un engagement sincère envers l\'innovation sociale, la transition numérique et la culture.'
                        : 'A sincere commitment to social innovation, digital transition and culture.'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-[#330066]/5 transition-colors duration-300">
                  <Users className="w-8 h-8 text-[#330066] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-[#330066] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Approche collaborative' : 'Collaborative approach'}
                    </h4>
                    <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' 
                        ? 'Une vision orientée vers la co-construction de solutions, l\'inclusion et la participation citoyenne.'
                        : 'A vision oriented towards co-construction of solutions, inclusion and citizen participation.'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-[#330066]/5 transition-colors duration-300">
                  <Target className="w-8 h-8 text-[#330066] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-[#330066] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {language === 'fr' ? 'Représentation efficace' : 'Effective representation'}
                    </h4>
                    <p className="text-[#1C1C1C] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' 
                        ? 'La capacité de défendre les intérêts de Loyola auprès des instances municipales.'
                        : 'The ability to defend Loyola\'s interests with municipal authorities.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 — Personal Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {personalInfo.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#330066] rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                      <item.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#330066] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-[#1C1C1C] leading-relaxed text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

            {/* Section 5 — Parcours professionnel zigzag */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-3xl md:text-4xl font-bold text-[#330066] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Parcours professionnel' : 'Professional Journey'}
            </h3>
            <div className="relative w-full flex justify-center">
              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full z-0">
                <svg width="120" height="600" viewBox="0 0 120 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
                  <polyline points="60,0 10,100 110,200 10,300 110,400 60,600" fill="none" stroke="#330066" strokeWidth="6" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col w-full md:w-[700px] mx-auto">
				{[
						{
							year: '2018-2024',
							title: language === 'fr' ? 'Vice-président Les 7 Doigts' : 'Vice-President Les 7 Doigts',
							description: language === 'fr' 
								? 'Leadership dans la transformation numérique et l\'innovation culturelle'
								: 'Leadership in digital transformation and cultural innovation'
						},
						{
							year: '2010-2018',
							title: language === 'fr' ? 'Co-fondateur de RDV NDG' : 'Co-founder of RDV NDG',
							description: language === 'fr' 
								? "Organisme à but non lucratif qui anime les parcs de NDG et qui gère le chalet du Parc Girouard. Ce travail prouve que nous sommes capables de créer un sentiment de communauté fort basé sur une programmation culturelle et culinaire riche."
								: 'A non-profit that animates NDG parks and manages the Parc Girouard chalet. This work proves we can create a strong sense of community based on rich cultural and culinary programming.'
						},
						{
							year: '2003-2010',
							title: language === 'fr' ? 'Directeur développement des affaires' : 'Business Development Director',
							description: language === 'fr' 
								? 'Ariane Montréal - Animation de réseaux de partenaires et optimisation de la gestion des ressources'
								: 'Ariane Montréal - Partner network animation and resource management optimization'
						},
					].map((item, index) => (
                    <div key={index} className="relative flex md:min-h-[150px] animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Point du zigzag */}
                      <div className={`hidden md:block absolute z-10 ${index % 2 === 0 ? 'left-[10px]' : 'right-[10px]'} top-1/2 -translate-y-1/2 w-7 h-7 bg-[#330066] rounded-full border-4 border-white shadow-lg`}></div>
                    {/* Carte alternée */}
                    {index % 2 === 0 ? (
                      <div className="w-full md:w-1/2 md:pl-[80px] md:pr-0 flex flex-col items-start md:items-end">
                          <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-lg border-l-4 border-[#330066] max-w-md text-left md:text-right hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                          <div className="text-sm font-bold text-[#330066] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.year}</div>
                          <h4 className="text-xl font-bold text-[#330066] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h4>
                            <p className="text-[#1C1C1C] leading-relaxed text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>{item.description}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full md:w-1/2 md:pr-[80px] md:pl-0 flex flex-col items-end md:items-start ml-auto">
                          <div className="bg-[#F7F7F7] p-6 rounded-xl shadow-lg border-r-4 border-[#330066] max-w-md text-left hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                          <div className="text-sm font-bold text-[#330066] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.year}</div>
                          <h4 className="text-xl font-bold text-[#330066] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h4>
                            <p className="text-[#1C1C1C] leading-relaxed text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>{item.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

            {/* Section 6 — Community Photos */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-[#330066] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'NDG en images' : 'NDG in Pictures'}
                </h3>
                <p className="text-lg text-[#1C1C1C]/80 max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {language === 'fr' 
                    ? 'Découvrez la beauté et la diversité de notre communauté dans NDG'
                    : 'Discover the beauty and diversity of our NDG community'
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                  <img 
                    src="https://res.cloudinary.com/dznkbutnm/image/upload/v1752932694/WhatsApp_Image_2025-07-05_%C3%A0_12.48.24_c29e2e9e_jrkqxw.jpg"
                    alt={language === 'fr' ? 'Vie communautaire à Loyola' : 'Community life in Loyola'}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {language === 'fr' ? 'Vie communautaire' : 'Community Life'}
                      </h4>
                      <p className="text-sm opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {language === 'fr' ? 'Ensemble, nous construisons l\'avenir' : 'Together, we build the future'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                  <img 
                    src="https://res.cloudinary.com/dznkbutnm/image/upload/v1752920705/WhatsApp_Image_2025-07-18_%C3%A0_18.16.05_db78dcb1_fwpjpe.jpg"
                    alt={language === 'fr' ? 'Alexandre avec la communauté' : 'Alexandre with the community'}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {language === 'fr' ? 'Engagement local' : 'Local Engagement'}
                      </h4>
                      <p className="text-sm opacity-90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {language === 'fr' ? 'Écouter et agir pour notre quartier' : 'Listen and act for our neighborhood'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                  <video
                    src="https://res.cloudinary.com/dznkbutnm/video/upload/v1752920710/WhatsApp_Vid%C3%A9o_2025-07-13_%C3%A0_23.51.15_32edd6ab_e0qpwr.mp4"
                    className="w-full h-64 object-cover"
                    controls
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>

            {/* Section 7 — Key Values/Mission */}
            <div className="bg-[#330066] rounded-3xl p-12 text-white text-center animate-slide-up">
              <Heart className="w-16 h-16 mx-auto mb-8 text-white animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {language === 'fr' ? 'Compétences clés' : 'Key Competencies'}
            </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-left">
                  <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {language === 'fr' ? 'Innover pour la collectivité' : 'Innovating for the community'}
                  </h4>
                  <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' 
                      ? 'Maîtrise de la gouvernance, gestion de l\'innovation, et expérience concrète de projets d\'impact à grande échelle.'
                      : 'Mastery of governance, innovation management, and concrete experience with large-scale impact projects.'
                    }
                  </p>
                  </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {language === 'fr' ? 'Leadership en temps de crise' : 'Leadership in times of crisis'}
                  </h4>
                  <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {language === 'fr' 
                      ? 'Capacité démontrée à réagir avec créativité et vision stratégique lors de situations complexes, comme la pandémie.'
                      : 'Demonstrated ability to respond with creativity and strategic vision during complex situations, such as the pandemic.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 — Équipe Ensemble Montréal */}
            <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-[#330066] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'L\'équipe Ensemble Montréal' : 'The Ensemble Montréal Team'}
                </h3>
                <p className="text-lg text-[#1C1C1C] max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {language === 'fr' 
                    ? 'Alexandre fait partie d\'une équipe expérimentée de leaders dévoués à améliorer la qualité de vie à Montréal.'
                    : 'Alexandre is part of an experienced team of leaders dedicated to improving quality of life in Montreal.'
                  }
                </p>
              </div>

              {/* Cheffe du parti */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-[#330066] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Leadership' : 'Leadership'}
                </h4>
                <div className="flex justify-center">
                  <div className="bg-[#330066] p-8 rounded-2xl text-white max-w-md text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 mx-auto mb-6">
                      <img 
                        src="/ensemble_team/Soraya.png" 
                        alt="Soraya Martinez Ferrada"
                      className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <h5 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Soraya Martinez Ferrada
                    </h5>
                    <p className="text-white/90" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {language === 'fr' ? 'Cheffe d\'Ensemble Montréal et candidate à la mairie' : 'Leader of Ensemble Montréal and mayoral candidate'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Maires d'arrondissement */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-[#330066] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Maires d\'arrondissement' : 'Borough Mayors'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Alan DeSousa',
                      role: language === 'fr' ? 'Maire, Saint-Laurent' : 'Mayor, Saint-Laurent',
                      image: '/ensemble_team/Alain.png'
                    },
                    {
                      name: 'Dimitrios (Jim) Beis',
                      role: language === 'fr' ? 'Maire, Pierrefonds-Roxboro' : 'Mayor, Pierrefonds-Roxboro',
                      image: '/ensemble_team/Dimitrios.png'
                    },
                    {
                      name: 'Christine Black',
                      role: language === 'fr' ? 'Mairesse, Montréal-Nord' : 'Mayor, Montréal-Nord',
                      image: '/ensemble_team/Christine.png'
                    }
                  ].map((member, index) => (
                    <div key={index} className="bg-[#F7F7F7] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#330066] mx-auto mb-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <h5 className="text-lg font-bold text-[#330066] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {member.name}
                      </h5>
                      <p className="text-[#1C1C1C] text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conseillers municipaux */}
              <div>
                <h4 className="text-2xl font-bold text-[#330066] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {language === 'fr' ? 'Conseillers municipaux' : 'City Councillors'}
                  </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {[
                    {
                      name: 'Benoit Langevin',
                      role: language === 'fr' ? 'Pierrefonds-Roxboro' : 'Pierrefonds-Roxboro',
                      image: '/ensemble_team/Benoit.png'
                    },
                    {
                      name: 'Mary Deros',
                      role: language === 'fr' ? 'Villeray–Saint-Michel–Parc-Extension' : 'Villeray–Saint-Michel–Parc-Extension',
                      image: '/ensemble_team/Mary.png'
                    },
                    {
                      name: 'Sonny Moroz',
                      role: language === 'fr' ? 'Côte-des-Neiges–Notre-Dame-de-Grâce' : 'Côte-des-Neiges–Notre-Dame-de-Grâce',
                      image: '/ensemble_team/Sonny.png'
                    },
                    {
                      name: 'Effie Giannou',
                      role: language === 'fr' ? 'Ahuntsic-Cartierville' : 'Ahuntsic-Cartierville',
                      image: '/ensemble_team/Effie.png'
                    },
                    {
                      name: 'Chantal Rossi',
                      role: language === 'fr' ? 'Montréal-Nord' : 'Montréal-Nord',
                      image: '/ensemble_team/Chantal.png'
                    },
                    {
                      name: 'Dominic Perri',
                      role: language === 'fr' ? 'Saint-Léonard' : 'Saint-Léonard',
                      image: '/ensemble_team/Dominic.png'
                    }
                  ].map((member, index) => (
                    <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#330066] mx-auto mb-3">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <h5 className="text-sm font-bold text-[#330066] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {member.name}
                      </h5>
                      <p className="text-[#1C1C1C] text-xs" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {member.role}
                  </p>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;