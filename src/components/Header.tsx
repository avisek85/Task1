import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    { 
      name: 'Home', 
      href: '/',
      type: 'link'
    },
    { 
      name: 'About Us', 
      href: 'about',
      type: 'scroll',
      submenu: [
        { name: 'VGE Group', href: 'vge-group', type: 'scroll' },
        { name: 'Where We Operate', href: 'where-we-operate', type: 'scroll' },
        { name: 'Our Leadership', href: 'our-leadership', type: 'scroll' },
        { name: 'Our Strategy', href: 'our-strategy', type: 'scroll' },
        { name: 'Our History', href: 'our-history', type: 'scroll' }
      ]
    },
    { 
      name: 'Facilities', 
      href: '/facilities',
      type: 'link',
      submenu: [
        { name: 'Field Investigation', href: 'field-investigation', type: 'scroll' },
        { name: 'Lab Testing', href: 'lab-testing', type: 'scroll' },
        { name: 'Monitoring', href: 'monitoring', type: 'scroll' },
        { name: 'R&D', href: 'rd', type: 'scroll' },
        { name: 'Advanced Testing', href: 'advanced-testing', type: 'scroll' }
      ]
    },
    { 
      name: 'Expertise', 
      href: '/expertise',
      type: 'link',
      submenu: [
        { name: 'Ground Improvement', href: 'ground-improvement', type: 'scroll' },
        { name: 'Slope Stability', href: 'slope-stability', type: 'scroll' },
        { name: 'Rock and Soil', href: 'rock-and-soil', type: 'scroll' },
        { name: 'Tunneling', href: 'tunneling', type: 'scroll' },
        { name: 'Retaining Wall', href: 'retaining-wall', type: 'scroll' },
        { name: 'Soil Nailing', href: 'soil-nailing', type: 'scroll' }
      ]
    },
    { name: 'Projects', href: '/projects', type: 'link' },
    { name: 'R&D', href: '/rd', type: 'link' },
    { name: 'Publications', href: '/publications', type: 'link' },
    { name: 'Contact Us', href: 'contact', type: 'scroll' }
  ];

  const handleItemClick = (item: any) => {
    if (item.type === 'link') {
      navigate(item.href);
    } else {
      scrollToSection(item.href);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img 
                src="/uploads/9a5752d7-dc56-4f11-86fc-c2625fb14f70.png" 
                alt="VGE Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-vge-blue-dark font-display font-bold text-lg">
                Venkat Geotechnical
              </h1>
              <h1 className="text-vge-blue-dark font-display font-bold text-lg">
              Engineering Pvt. Ltd.
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleItemClick(item)}
                  className="flex items-center space-x-1 text-vge-blue-dark hover:text-vge-orange transition-colors duration-200 font-medium"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {/* Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => handleItemClick(subItem)}
                        className="block w-full text-left px-4 py-2 text-vge-blue-dark hover:bg-vge-beige hover:text-vge-orange transition-colors duration-200"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-vge-blue-dark">
              <span className="text-sm font-medium">📞 +91 8448556657</span>
            </div>
            
            <button
              className="lg:hidden text-vge-blue-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="py-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleItemClick(item)}
                    className="block w-full text-left px-4 py-3 text-vge-blue-dark hover:bg-vge-beige hover:text-vge-orange transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                  {item.submenu && (
                    <div className="pl-6 bg-gray-50">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleItemClick(subItem)}
                          className="block w-full text-left px-4 py-2 text-sm text-vge-brown hover:text-vge-orange transition-colors duration-200"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
