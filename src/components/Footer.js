import React from 'react';
import { handleNavClick } from '../utils/scrollUtils';

const Footer = () => {
  const quickLinks = [
    { href: '#beranda', text: 'Home' },
    { href: '#tentang', text: 'Tentang Kami' },
    { href: '#kegiatan', text: 'Kegiatan' },
    { href: '#galeri', text: 'Galeri' },
    { href: '#donasi', text: 'Donasi' },
    { href: '#kontak', text: 'Kontak' }
  ];


  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="footer-section">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-primary">Yayasan Melati Rawasari</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mobile-min">
              Yayasan Santunan Anak Yatim Piatu dan Dhuafa Melati Rawasari telah berdedikasi sejak tahun 1990 untuk membantu anak-anak yang membutuhkan.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-4 font-primary">Link Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors mobile-min"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-4 font-primary">Kontak</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="mobile-min">Jl. Rawasari Timur Gang MHT No. 28A, Jakarta Pusat 10510</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="mobile-min">+62 812 8018 272 (Rina)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mobile-min">&copy; 2024 Yayasan Santunan Anak Yatim Piatu dan Dhuafa Melati Rawasari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;