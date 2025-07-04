
import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import LatestUpdates from '../components/LatestUpdates';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Full-Screen Slider and Latest Updates Overlay */}
      <section id="home" className="relative">
        {/* Full-Screen Hero Slider */}
        <div className="w-full">
          <HeroSlider />
        </div>

        {/* Latest Updates Overlay - 70% width of current size */}
        <div className="hidden lg:block absolute top-20 right-4 w-80 max-w-sm z-10">
          <LatestUpdates />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
