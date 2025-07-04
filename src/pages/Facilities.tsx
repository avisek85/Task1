
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Facilities = () => {
  const facilitiesData = [
    {
      id: 'field-investigation',
      title: "Field Investigation",
      icon: "🔍",
      color: "from-vge-blue-light to-vge-blue-sky",
      shortDescription: "Comprehensive site investigation services using advanced techniques for accurate subsurface characterization and geological assessment.",
      subcategories: [
        { name: "Geological", shortDesc: "Geological surveys and mapping" },
        { name: "Geophysical", shortDesc: "Advanced geophysical techniques" },
        { name: "Geotechnical", shortDesc: "Site characterization studies" },
        { name: "Seismic", shortDesc: "Seismic hazard assessments" }
      ]
    },
    {
      id: 'field-monitoring',
      title: "Field Monitoring",
      icon: "📊",
      color: "from-vge-orange to-vge-orange-light",
      shortDescription: "Real-time monitoring solutions providing continuous data collection and analysis for construction safety and performance optimization.",
      subcategories: [
        { name: "Real-time Monitoring", shortDesc: "Continuous data collection" },
        { name: "Instrumentation", shortDesc: "Advanced equipment deployment" },
        { name: "Data Analysis", shortDesc: "Comprehensive data interpretation" }
      ]
    },
    {
      id: 'laboratory-testing',
      title: "Laboratory Testing",
      icon: "🧪",
      color: "from-vge-brown to-vge-brown-light",
      shortDescription: "State-of-the-art laboratory facilities equipped with advanced testing equipment for comprehensive material characterization.",
      subcategories: [
        { name: "Soil Testing", shortDesc: "Comprehensive soil mechanics" },
        { name: "Rock Testing", shortDesc: "Advanced rock mechanics analysis" },
        { name: "Chemical Analysis", shortDesc: "Material composition studies" }
      ]
    },
    {
      id: 'analysis-design',
      title: "Analysis and Design",
      icon: "📐",
      color: "from-vge-blue-deep to-vge-blue-dark",
      shortDescription: "Advanced analytical and design services utilizing cutting-edge software for complex geotechnical engineering problems.",
      subcategories: [
        { name: "Kinematic Analysis", shortDesc: "Movement and stability analysis" },
        { name: "Analytical Solutions", shortDesc: "Mathematical modeling" },
        { name: "Numerical Modeling", shortDesc: "Computer-based simulations" }
      ]
    },
    {
      id: 'research-training',
      title: "Research and Training",
      icon: "🎓",
      color: "from-vge-blue-light to-vge-blue-deep",
      shortDescription: "Comprehensive research and professional development programs designed to advance geotechnical engineering knowledge and skills.",
      subcategories: [
        { name: "Short Courses", shortDesc: "Specialized technical training" },
        { name: "Workshops", shortDesc: "Hands-on learning sessions" },
        { name: "Seminars", shortDesc: "Professional development" }
      ]
    },
    {
      id: 'project-reports',
      title: "Project Reports (DPR)",
      icon: "📋",
      color: "from-vge-orange to-vge-brown",
      shortDescription: "Comprehensive project documentation and detailed feasibility studies providing thorough analysis for successful implementation.",
      subcategories: [
        { name: "Technical Reports", shortDesc: "Detailed documentation" },
        { name: "Feasibility Studies", shortDesc: "Project viability analysis" },
        { name: "Risk Assessment", shortDesc: "Comprehensive risk evaluation" }
      ]
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
              Our Facilities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              State-of-the-art facilities and advanced testing equipment for comprehensive geotechnical solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-vge-orange to-vge-orange-light mx-auto rounded-full"></div>
          </div>

          {/* Facilities Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {facilitiesData.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group">
                {/* Header */}
                <div className={`bg-gradient-to-r ${facility.color} p-6 relative`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm">
                      {facility.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">
                        {facility.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Short Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {facility.shortDescription}
                  </p>
                  
                  {/* Key Services - showing only first 3 */}
                  <div className="space-y-3 mb-6">
                    {facility.subcategories.slice(0, 3).map((sub, subIndex) => (
                      <div key={subIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-2 h-2 bg-vge-blue-light rounded-full flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-vge-blue-dark text-sm">{sub.name}</h4>
                          <p className="text-xs text-gray-600">{sub.shortDesc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Read More Button */}
                  <Link 
                    to={`/facilities/${facility.id}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${facility.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-sm font-medium`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-vge-blue-dark via-vge-blue-deep to-vge-blue-light text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-vge-orange/20 to-vge-blue-light/20 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-display font-bold mb-6">Experience Our Facilities</h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Discover how our advanced facilities and equipment can support your next geotechnical project
                </p>
                <button className="bg-gradient-to-r from-vge-orange to-vge-orange-light hover:from-vge-orange-light hover:to-vge-orange text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Schedule a Facility Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Facilities;
