
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold text-vge-blue-dark mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful geotechnical engineering projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-vge-blue-dark to-vge-blue-light"></div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-vge-blue-dark mb-3">M25 Highway Expansion</h3>
                <p className="text-gray-600 mb-4">Major slope stabilization project for M25 expansion using innovative ground improvement techniques.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vge-orange font-medium">Completed 2024</span>
                  <span className="px-3 py-1 bg-vge-beige text-vge-brown rounded-full text-sm">Infrastructure</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-vge-orange to-vge-brown"></div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-vge-blue-dark mb-3">London Underground Extension</h3>
                <p className="text-gray-600 mb-4">Complex tunneling project with advanced soil nailing and ground support systems.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vge-orange font-medium">Ongoing</span>
                  <span className="px-3 py-1 bg-vge-beige text-vge-brown rounded-full text-sm">Transportation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-vge-beige to-vge-brown"></div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-vge-blue-dark mb-3">Thames Flood Defense</h3>
                <p className="text-gray-600 mb-4">Comprehensive flood defense system with innovative retaining wall solutions.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vge-orange font-medium">Completed 2023</span>
                  <span className="px-3 py-1 bg-vge-beige text-vge-brown rounded-full text-sm">Environmental</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-vge-blue-light to-vge-beige"></div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-vge-blue-dark mb-3">High-Rise Foundation</h3>
                <p className="text-gray-600 mb-4">Deep foundation solutions for 50-story commercial development in challenging soil conditions.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vge-orange font-medium">Completed 2024</span>
                  <span className="px-3 py-1 bg-vge-beige text-vge-brown rounded-full text-sm">Commercial</span>
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

export default Projects;
