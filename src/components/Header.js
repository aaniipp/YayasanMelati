import React, { useState, useEffect } from 'react';
import { handleNavClick } from '../utils/scrollUtils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#beranda');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          
          // Update active section based on scroll position
          const sections = ['#beranda', '#tentang', '#kegiatan', '#galeri', '#donasi', '#kontak'];
          const scrollPosition = window.scrollY + 100;
          
          for (const section of sections) {
            const element = document.querySelector(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beranda', text: 'Home' },
    { href: '#tentang', text: 'Tentang Kami' },
    { href: '#kegiatan', text: 'Kegiatan' },
    { href: '#galeri', text: 'Galeri' },
    { href: '#donasi', text: 'Donasi' },
    { href: '#kontak', text: 'Kontak' }
  ];

  const handleNavClickInternal = (e, href) => {
    handleNavClick(e, href, setIsMobileMenuOpen);
    setActiveSection(href);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay lg:hidden ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <header className={`fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-xl' : 'py-3 sm:py-4'}`}>
        <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer" onClick={(e) => handleNavClickInternal(e, '#beranda')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 font-primary group-hover:text-primary transition-colors">Yayasan Melati Rawasari</h2>
            </div>
            <div className="sm:hidden">
              <h2 className="text-sm font-bold text-gray-800 font-primary">Yayasan Melati</h2>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  className={`nav-link flex items-center px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base ${
                    activeSection === link.href
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={(e) => handleNavClickInternal(e, link.href)}
                >
                  {link.text}
                </a>
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300 ${
                  activeSection === link.href ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            ))}
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="#donasi"
              className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold font-primary text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-primary/90 hover:to-secondary/90"
              onClick={(e) => handleNavClickInternal(e, '#donasi')}
            >
              Donasi Sekarang
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced Hamburger */}
          <button
            className={`lg:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              isMobileMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className={`relative w-6 h-5 flex flex-col justify-center items-center transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${isMobileMenuOpen ? 'transform scale-110' : 'transform scale-100'}`}>
              <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] will-change-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] will-change-transform ${isMobileMenuOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] will-change-transform ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-600 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] transform origin-top will-change-transform mobile-menu-container ${
            isMobileMenuOpen ? 'scale-y-100 opacity-100 visible translate-y-0' : 'scale-y-0 opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="py-6 px-4 bg-white shadow-2xl border-t border-gray-100">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : '0ms'
                  }}
                  className={`transform transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] will-change-transform will-change-opacity mobile-menu-item ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-6 opacity-0 scale-95'
                  }`}
                >
                  <a
                    href={link.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-350 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] touch-manipulation will-change-transform mobile-menu-link ${
                      activeSection === link.href
                        ? 'text-white bg-gradient-to-r from-primary to-secondary shadow-md transform scale-105'
                        : 'text-gray-700 hover:text-primary hover:bg-primary/5 hover:translate-x-1'
                    }`}
                    onClick={(e) => handleNavClickInternal(e, link.href)}
                  >
                    <span className="flex items-center justify-between">
                      <span className="transform transition-transform duration-300 will-change-transform">{link.text}</span>
                      {activeSection === link.href && (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] will-change-transform scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      )}
                    </span>
                  </a>
                </li>
              ))}
              <li
                className="pt-3 border-t border-gray-200 transform transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] will-change-transform will-change-opacity mobile-menu-item"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${navLinks.length * 60}ms` : '0ms'
                }}
              >
                <a
                  href="#donasi"
                  className="block w-full px-4 py-3 text-base font-semibold bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg transition-all duration-350 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] transform hover:scale-105 hover:shadow-xl hover:from-primary/90 hover:to-secondary/90 touch-manipulation will-change-transform mobile-menu-link"
                  onClick={(e) => handleNavClickInternal(e, '#donasi')}
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform transition-transform duration-300 will-change-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    Donasi Sekarang
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;