
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const aboutSections = [
    {
      title: "VGE Group",
      description: "Established as a premier geotechnical engineering consultancy, serving clients across diverse industries worldwide.",
      color: "from-vge-orange to-vge-orange-light"
    },
    {
      title: "Where We Operate",  
      description: "Our operations span across multiple continents, adapting our expertise to diverse geological conditions.",
      color: "from-vge-blue-light to-vge-blue-sky"
    },
    {
      title: "Our Leadership",
      description: "Led by industry veterans with decades of experience in geotechnical engineering and project management.",
      color: "from-vge-blue-deep to-vge-blue-dark"
    },
    {
      title: "Our Strategy",
      description: "Focused on innovation, quality, and sustainable solutions that address complex geotechnical challenges.",
      color: "from-vge-brown to-vge-brown-light"
    },
    {
      title: "Our History",
      description: "A legacy of excellence built over 25+ years of dedicated service in geotechnical engineering.",
      color: "from-vge-blue-dark to-vge-blue-deep"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-display font-bold text-vge-blue-dark mb-6">
              About VGE Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our journey, values, and commitment to excellence in geotechnical engineering
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-vge-orange to-vge-orange-light mx-auto rounded-full"></div>
          </div>

          {/* About Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {aboutSections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className={`bg-gradient-to-r ${section.color} p-8`}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission, Vision, Values Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-display font-bold text-vge-blue-dark mb-12 text-center">
              Our Foundation
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-vge-orange hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-display font-bold text-vge-blue-dark mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide world-class geotechnical engineering services that ensure safe, 
                  sustainable, and cost-effective solutions for tomorrow's infrastructure challenges.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-vge-blue-light hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-display font-bold text-vge-blue-dark mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the globally recognized leader in geotechnical innovation, setting industry 
                  standards through cutting-edge research and technology.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-vge-brown hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-display font-bold text-vge-blue-dark mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence, innovation, and integrity drive our commitment to delivering 
                  reliable geotechnical solutions while maintaining the highest professional standards.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "25+", label: "Years Experience", color: "from-vge-blue-dark to-vge-blue-deep" },
              { number: "500+", label: "Projects Completed", color: "from-vge-orange to-vge-orange-light" },
              { number: "50+", label: "Countries Served", color: "from-vge-brown to-vge-brown-light" },
              { number: "100+", label: "Expert Team", color: "from-vge-blue-light to-vge-blue-sky" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-br ${stat.color} text-white p-6 rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-300`}>
                  <div className="text-3xl font-display font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
