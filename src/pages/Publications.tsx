
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Publications = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold text-vge-blue-dark mb-6">
              Publications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contributing to the advancement of geotechnical engineering through research and publications
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-vge-blue-dark mb-2">
                    "Innovative Ground Improvement Methods for Urban Development"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    A comprehensive study on sustainable ground improvement techniques for high-density urban environments.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>International Journal of Geotechnical Engineering</span>
                    <span>•</span>
                    <span>November 2024</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-vge-orange text-white rounded-full text-sm font-medium">Journal</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-vge-blue-dark mb-2">
                    "AI-Powered Slope Stability Analysis: A Machine Learning Approach"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Research on implementing artificial intelligence for predictive slope stability assessment in geotechnical engineering.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Geotechnical Research Quarterly</span>
                    <span>•</span>
                    <span>October 2024</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-vge-blue-light text-white rounded-full text-sm font-medium">Research</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-vge-blue-dark mb-2">
                    "Sustainable Geotechnical Solutions for Climate Resilience"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Conference presentation on climate-adaptive geotechnical engineering practices and their implementation.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>International Geotechnical Symposium 2024</span>
                    <span>•</span>
                    <span>September 2024</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-vge-brown text-white rounded-full text-sm font-medium">Conference</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-vge-blue-dark mb-2">
                    "Advanced Tunneling Techniques in Complex Geological Conditions"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Case study analysis of innovative tunneling solutions implemented in challenging geological environments.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Tunneling and Underground Construction</span>
                    <span>•</span>
                    <span>August 2024</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-vge-beige text-vge-brown rounded-full text-sm font-medium">Case Study</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-vge-blue-dark mb-2">
                    "Digital Transformation in Geotechnical Engineering"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    White paper on the integration of digital technologies and IoT in modern geotechnical practice.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>VGE Technical Reports</span>
                    <span>•</span>
                    <span>July 2024</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">White Paper</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Publications;
