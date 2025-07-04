
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RandD = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold text-vge-blue-dark mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovation drives our approach to solving complex geotechnical challenges
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-gradient-to-br from-vge-beige/50 to-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-display font-bold text-vge-blue-dark mb-6">Current Research Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-vge-brown mb-3">AI-Powered Soil Analysis</h3>
                  <p className="text-gray-600">Developing machine learning algorithms for automated soil classification and property prediction.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-vge-brown mb-3">Sustainable Ground Improvement</h3>
                  <p className="text-gray-600">Research into eco-friendly ground stabilization methods using bio-based materials.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-vge-brown mb-3">Smart Monitoring Systems</h3>
                  <p className="text-gray-600">IoT-based real-time monitoring solutions for slope stability and ground movement.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-vge-brown mb-3">Advanced Materials</h3>
                  <p className="text-gray-600">Development of new composite materials for geotechnical applications.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-vge-blue-light/20 to-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-display font-bold text-vge-blue-dark mb-6">Recent Innovations</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-vge-orange pl-6">
                  <h3 className="text-xl font-semibold text-vge-blue-dark mb-2">Predictive Slope Analysis Model</h3>
                  <p className="text-gray-600">Revolutionary AI model that predicts slope failure with 95% accuracy, published in International Journal of Geotechnical Engineering.</p>
                </div>
                <div className="border-l-4 border-vge-brown pl-6">
                  <h3 className="text-xl font-semibold text-vge-blue-dark mb-2">Bio-Enhanced Soil Stabilization</h3>
                  <p className="text-gray-600">Breakthrough research in using microbial-induced calcite precipitation for sustainable ground improvement.</p>
                </div>
                <div className="border-l-4 border-vge-blue-light pl-6">
                  <h3 className="text-xl font-semibold text-vge-blue-dark mb-2">Digital Twin Technology</h3>
                  <p className="text-gray-600">Implementation of digital twin technology for real-time geotechnical project monitoring and optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RandD;
