
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vge-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-vge-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">VGE</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">
                  Venkat Geotechnical
                </h3>
                <h3 className="font-display font-bold text-lg">
                  Engineering Pvt. Ltd.
                </h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading geotechnical engineering solutions for sustainable
              infrastructure development worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Ground Investigation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Lab Testing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Slope Stability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Rock Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
                >
                  Monitoring
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">📞 +91 8448556657 </p>
              <p className="text-sm">✉️ Venkat.geotech.engineering@gmail.com</p>
              <p className="text-sm">
                📍H.in.kh.no 293, S/f, Western Marg,near saket metro station
                gate -2, Saidulajab, Gadaipur, South West Delhi, New Delhi,
                Delhi, India, 110030{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@Polugari1995"
              className="text-gray-300 hover:text-vge-orange transition-colors duration-200"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Venkat Geotechnical Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
