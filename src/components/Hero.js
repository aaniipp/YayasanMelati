import React from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';

const Hero = () => {
  const handleDonasiClick = (e) => {
    e.preventDefault();
    smoothScrollTo('#donasi');
  };

  const handleTentangClick = (e) => {
    e.preventDefault();
    smoothScrollTo('#tentang');
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-primary leading-tight">
            Yayasan Santunan Anak Yatim Piatu dan Dhuafa Melati Rawasari
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-secondary opacity-90 leading-relaxed px-2">
            Berbagi kebahagiaan, menebar harapan untuk masa depan yang lebih cerah
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="#donasi"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-bold font-primary text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mobile-min"
              onClick={handleDonasiClick}
            >
              Donasi Sekarang
            </a>
            <a
              href="#tentang"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-full font-bold font-primary text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 mobile-min"
              onClick={handleTentangClick}
            >
              Tentang Kami
            </a>
          </div>
          
          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 sm:mt-16 px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl mb-2">34+</div>
              <div className="text-sm sm:text-base opacity-90">Tahun Pengabdian</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl mb-2">500+</div>
              <div className="text-sm sm:text-base opacity-90">Anak Asuh</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl mb-2">5</div>
              <div className="text-sm sm:text-base opacity-90">Program Aktif</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;