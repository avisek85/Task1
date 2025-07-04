
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Expertise = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-display font-bold text-vge-blue-dark mb-6">
              Our Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive geotechnical engineering solutions with decades of experience
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-vge-orange to-vge-orange-light mx-auto rounded-full"></div>
          </div>

          {/* Central Expertise Hub */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-16">
              <div className="relative">
                <div className="bg-gradient-to-br from-vge-blue-dark via-vge-blue-deep to-vge-blue-light text-white px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <h2 className="text-2xl font-display font-bold text-center">Expertise Hub</h2>
                  <p className="text-center text-blue-100 mt-2">Engineering Excellence</p>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-vge-orange/20 to-vge-blue-light/20 rounded-2xl blur-lg -z-10"></div>
              </div>
            </div>

            {/* Three Main Categories in Modern Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              
              {/* Techniques Section */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <div className="bg-gradient-to-r from-vge-brown to-vge-brown-light p-6">
                    <h3 className="text-2xl font-display font-bold text-white text-center">
                      Advanced Techniques
                    </h3>
                    <div className="w-16 h-1 bg-white/50 mx-auto mt-3 rounded-full"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    {[
                      { title: "Ground Improvement", desc: "Advanced stabilization techniques", icon: "🏗️" },
                      { title: "Slope Stability", desc: "Comprehensive slope analysis", icon: "⛰️" },
                      { title: "Forensic Engineering", desc: "Expert investigation services", icon: "🔍" },
                      { title: "Liquefaction Assessment", desc: "Seismic risk evaluation", icon: "🌊" }
                    ].map((item, index) => (
                      <div key={index} className="group/item relative overflow-hidden">
                        <div className="bg-gradient-to-br from-vge-beige to-white p-4 rounded-xl border-l-4 border-vge-brown hover:shadow-lg transition-all duration-300 hover:border-vge-brown-light">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                              <h4 className="font-semibold text-vge-blue-dark mb-1">{item.title}</h4>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-vge-brown/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Section */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <div className="bg-gradient-to-r from-vge-blue-deep to-vge-blue-light p-6">
                    <h3 className="text-2xl font-display font-bold text-white text-center">
                      Innovative Solutions
                    </h3>
                    <div className="w-16 h-1 bg-white/50 mx-auto mt-3 rounded-full"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    {[
                      { title: "Rock and Soil", desc: "Specialized analysis and treatment", icon: "🪨" },
                      { title: "Tunnelling", desc: "Expert tunneling solutions", icon: "🚇" },
                      { title: "Excavation Works", desc: "Safe excavation planning", icon: "⚒️" },
                      { title: "Training Programs", desc: "Professional development", icon: "🎓" }
                    ].map((item, index) => (
                      <div key={index} className="group/item relative overflow-hidden">
                        <div className="bg-gradient-to-br from-vge-blue-light/10 to-white p-4 rounded-xl border-l-4 border-vge-blue-deep hover:shadow-lg transition-all duration-300 hover:border-vge-blue-light">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                              <h4 className="font-semibold text-vge-blue-dark mb-1">{item.title}</h4>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-vge-blue-deep/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design Section */}
              <div className="relative group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <div className="bg-gradient-to-r from-vge-orange to-vge-orange-light p-6">
                    <h3 className="text-2xl font-display font-bold text-white text-center">
                      Structural Design
                    </h3>
                    <div className="w-16 h-1 bg-white/50 mx-auto mt-3 rounded-full"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    {[
                      { title: "Retaining Walls", desc: "Innovative wall designs", icon: "🧱" },
                      { title: "Foundations", desc: "Advanced foundation systems", icon: "🏛️" },
                      { title: "Soil Nailing", desc: "Slope stabilization techniques", icon: "📌" },
                      { title: "Tunnel Supports", desc: "Structural support systems", icon: "🔧" }
                    ].map((item, index) => (
                      <div key={index} className="group/item relative overflow-hidden">
                        <div className="bg-gradient-to-br from-vge-orange/10 to-white p-4 rounded-xl border-l-4 border-vge-orange hover:shadow-lg transition-all duration-300 hover:border-vge-orange-light">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                              <h4 className="font-semibold text-vge-blue-dark mb-1">{item.title}</h4>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-vge-orange/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            {/* <div className="mb-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "500+", label: "Projects Completed", color: "from-vge-blue-dark to-vge-blue-deep" },
                  { number: "25+", label: "Years Experience", color: "from-vge-brown to-vge-brown-light" },
                  { number: "50+", label: "Expert Engineers", color: "from-vge-orange to-vge-orange-light" },
                  { number: "100%", label: "Client Satisfaction", color: "from-vge-blue-light to-vge-blue-sky" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`bg-gradient-to-br ${stat.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl`}>
                      <div className="text-3xl font-display font-bold mb-2">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Call to Action Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-vge-blue-dark via-vge-blue-deep to-vge-blue-light text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-vge-orange/20 to-vge-blue-light/20 opacity-50"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Let our expertise guide your geotechnical engineering needs with innovative solutions and proven results
                  </p>
                  <button className="bg-gradient-to-r from-vge-orange to-vge-orange-light hover:from-vge-orange-light hover:to-vge-orange text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Contact Our Experts
                  </button>
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-vge-orange/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-vge-blue-light/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Expertise;
