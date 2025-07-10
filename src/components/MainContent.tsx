import React from 'react';

const MainContent = () => {
  return (
    <main className="bg-gray-100 min-h-[800px] flex-grow">
      {/* Container with responsive paddings */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* About Section */}
          <section id="about" className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C5F] mb-6 uppercase tracking-wide">
                À Propos
              </h2>
              <div className="w-24 h-1 bg-[#002C5F] mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                [Placeholder content for About section - Zohran Mamdani's background, experience, and vision for New York City will be featured here.]
              </p>
              <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium">Image Placeholder</span>
              </div>
            </div>
          </section>

          {/* Platform Section */}
          <section id="platform" className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C5F] mb-6 uppercase tracking-wide">
                Plateforme
              </h2>
              <div className="w-24 h-1 bg-[#002C5F] mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                [Placeholder content for Platform section - Key policy positions and campaign promises for reducing cost of living.]
              </p>
              
              {/* Platform Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#002C5F] mb-3">Housing Policy</h3>
                  <p className="text-gray-600 text-sm">[Policy details placeholder]</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#002C5F] mb-3">Economic Justice</h3>
                  <p className="text-gray-600 text-sm">[Policy details placeholder]</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#002C5F] mb-3">Public Transportation</h3>
                  <p className="text-gray-600 text-sm">[Policy details placeholder]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Endorsements Section */}
          <section id="endorsements" className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C5F] mb-6 uppercase tracking-wide">
                Endorsements
              </h2>
              <div className="w-24 h-1 bg-[#002C5F] mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                [Placeholder content for Endorsements section - Support from unions, organizations, and community leaders.]
              </p>
              
              {/* Endorsement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg text-left">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                  <h3 className="font-semibold text-[#002C5F] mb-2">[Organization Name]</h3>
                  <p className="text-gray-600 text-sm italic">"Endorsement quote placeholder..."</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-left">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                  <h3 className="font-semibold text-[#002C5F] mb-2">[Union Name]</h3>
                  <p className="text-gray-600 text-sm italic">"Endorsement quote placeholder..."</p>
                </div>
              </div>
            </div>
          </section>

          {/* Press Section */}
          <section id="press" className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C5F] mb-6 uppercase tracking-wide">
                Presse
              </h2>
              <div className="w-24 h-1 bg-[#002C5F] mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                [Placeholder content for Press section - Recent media coverage and press releases.]
              </p>
              
              {/* Press Items */}
              <div className="space-y-4">
                <div className="border-l-4 border-[#002C5F] pl-6 py-4 text-left">
                  <h3 className="font-semibold text-[#002C5F] mb-2">[News Outlet] - [Date]</h3>
                  <p className="text-gray-600">"[Article headline or excerpt placeholder]"</p>
                  <a href="#" className="text-[#002C5F] text-sm hover:underline">Read more →</a>
                </div>
                <div className="border-l-4 border-[#002C5F] pl-6 py-4 text-left">
                  <h3 className="font-semibold text-[#002C5F] mb-2">[News Outlet] - [Date]</h3>
                  <p className="text-gray-600">"[Article headline or excerpt placeholder]"</p>
                  <a href="#" className="text-[#002C5F] text-sm hover:underline">Read more →</a>
                </div>
              </div>
            </div>
          </section>

          {/* Volunteer Section */}
          <section id="volunteer" className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C5F] mb-6 uppercase tracking-wide">
                Bénévole
              </h2>
              <div className="w-24 h-1 bg-[#002C5F] mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                [Placeholder content for Volunteer section - Ways to get involved in the campaign.]
              </p>
              
              {/* Volunteer Opportunities */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#002C5F] text-white p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Phone Banking</h3>
                  <p className="text-sm mb-4">Help us reach voters by phone</p>
                  <button className="bg-white text-[#002C5F] px-4 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                    Sign Up
                  </button>
                </div>
                <div className="bg-[#002C5F] text-white p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Canvassing</h3>
                  <p className="text-sm mb-4">Door-to-door community outreach</p>
                  <button className="bg-white text-[#002C5F] px-4 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                    Sign Up
                  </button>
                </div>
                <div className="bg-[#002C5F] text-white p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Events</h3>
                  <p className="text-sm mb-4">Help organize campaign events</p>
                  <button className="bg-white text-[#002C5F] px-4 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default MainContent;