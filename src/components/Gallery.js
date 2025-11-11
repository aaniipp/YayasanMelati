import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const slideshowRef = useRef(null);
  const autoPlayInterval = useRef(null);

  const slides = [
    {
      id: 1,
      bgColor: 'from-primary to-primary/80',
      category: 'Program Utama',
      title: 'Santunan Hari Raya Idul Fitri',
      description: 'Pembagian santunan dan paket sembako untuk 150+ anak asuh dan warga dhuafa menyambut lebaran 1446 H dengan penuh kebahagiaan.',
      date: 'April 2024',
      beneficiaries: '150+ Penerima Manfaat',
      image: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Santunan+Idul+Fitri+1446H',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      gallery: [
        'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Idul+Fitri+1',
        'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Idul+Fitri+2',
        'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Idul+Fitri+3'
      ]
    },
    {
      id: 2,
      bgColor: 'from-success to-success/80',
      category: 'Pendidikan',
      title: 'Beasiswa Pendidikan',
      description: 'Dukungan pendidikan lengkap untuk 75 anak yatim mulai dari SD hingga SMA, meliputi SPP, seragam, dan peralatan sekolah.',
      date: 'Tahun Ajaran 2023/2024',
      beneficiaries: '75 Anak Penerima Beasiswa',
      image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Beasiswa+Pendidikan',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      gallery: [
        'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Beasiswa+1',
        'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Beasiswa+2',
        'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Beasiswa+3'
      ]
    },
    {
      id: 3,
      bgColor: 'from-warning to-warning/80',
      category: 'Kesejahteraan',
      title: 'Pembagian Sembako',
      description: 'Program rutin setiap 3 bulan dengan distribusi 200 paket sembako untuk anak yayasan, pengurus, dan warga sekitar yang membutuhkan.',
      date: 'Setiap Kuartal',
      beneficiaries: '200+ Paket Sembako',
      image: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Pembagian+Sembako',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3zM12 8v8M8 12h8"/>
        </svg>
      ),
      gallery: [
        'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Sembako+1',
        'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Sembako+2',
        'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Sembako+3'
      ]
    },
    {
      id: 4,
      bgColor: 'from-purple-500 to-purple-500/80',
      category: 'Keagamaan',
      title: 'Kegiatan Keagamaan',
      description: 'Program pembelajaran Al-Qur\'an meliputi Iqra, tahsin, hingga murojaah Juz 30 yang dilaksanakan seminggu sekali secara rutin.',
      date: 'Setiap Minggu',
      beneficiaries: '50+ Santri Aktif',
      image: 'https://via.placeholder.com/600x400/A855F7/FFFFFF?text=Kegiatan+Keagamaan',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
        </svg>
      ),
      gallery: [
        'https://via.placeholder.com/400x300/A855F7/FFFFFF?text=Keagamaan+1',
        'https://via.placeholder.com/400x300/A855F7/FFFFFF?text=Keagamaan+2',
        'https://via.placeholder.com/400x300/A855F7/FFFFFF?text=Keagamaan+3'
      ]
    },
    {
      id: 5,
      bgColor: 'from-accent to-accent/80',
      category: 'Qurban',
      title: 'Qurban Idul Adha',
      description: 'Pelaksanaan pemotongan hewan qurban dan distribusi daging kepada 300+ penerima manfaat di wilayah Jakarta Pusat dan sekitarnya.',
      date: 'Idul Adha 1444 H',
      beneficiaries: '8 Ekor Sapi & 15 Kambing',
      image: 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Qurban+Idul+Adha',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      gallery: [
        'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Qurban+1',
        'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Qurban+2',
        'https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Qurban+3'
      ]
    }
  ];

  const programStats = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      bgColor: 'bg-primary/10',
      number: '500+',
      label: 'Anak Asuh'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      bgColor: 'bg-success/10',
      number: '75',
      label: 'Beasiswa Aktif'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3zM12 8v8M8 12h8"/>
        </svg>
      ),
      bgColor: 'bg-warning/10',
      number: '800+',
      label: 'Paket Sembako/Tahun'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
        </svg>
      ),
      bgColor: 'bg-purple-500/10',
      number: '34',
      label: 'Tahun Pengabdian'
    }
  ];

  const startAutoPlay = () => {
    if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    autoPlayInterval.current = setInterval(() => {
      goToNextSlide();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = null;
    }
  };

  const toggleAutoPlay = () => {
    if (isAutoPlay) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
    setIsAutoPlay(!isAutoPlay);
  };


  const goToSlide = (slideIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(slideIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 450); // Optimized duration for smoother transitions
  };

  const goToPrevSlide = () => {
    const newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(newSlide);
  };

  const goToNextSlide = () => {
    const newSlide = (currentSlide + 1) % slides.length;
    goToSlide(newSlide);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    stopAutoPlay();
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNextSlide();
    }
    if (isRightSwipe) {
      goToPrevSlide();
    }
    
    if (isAutoPlay) {
      startAutoPlay();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevSlide();
        stopAutoPlay();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
        stopAutoPlay();
      } else if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    if (isAutoPlay) {
      startAutoPlay();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      stopAutoPlay();
    };
  }, [currentSlide, isAutoPlay]);

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-primary">Galeri Kegiatan</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-secondary mobile-min">
            Lihat langsung program-program yang telah kami jalankan dan dampak positif yang dihasilkan untuk anak-anak yatim dan dhuafa.
          </p>
        </div>

        {/* Activity Slideshow */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Enhanced Controls Bar */}
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleAutoPlay}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  title={isAutoPlay ? 'Pause' : 'Play'}
                  aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isAutoPlay ? (
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  )}
                </button>
              </div>
              <div className="text-sm text-gray-500 font-secondary font-medium">
                <span className="sr-only">Slide</span>
                {currentSlide + 1} <span aria-hidden="true">/</span> {slides.length}
              </div>
            </div>

            {/* Enhanced Slideshow Container */}
            <div
              ref={slideshowRef}
              className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={() => isAutoPlay && startAutoPlay()}
              role="region"
              aria-label="Gallery slideshow"
              aria-roledescription="carousel"
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slide ${index === currentSlide ? 'active' : ''} ${index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1) ? 'prev' : ''}`}
                >
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    <div className={`bg-gradient-to-br ${slide.bgColor} p-4 sm:p-6 md:p-8 lg:p-12 text-white flex items-center slide-content-left`}>
                      <div className="animate-fade-in-up w-full">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 animate-scale-in">
                            {slide.icon}
                          </div>
                          <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">{slide.category}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-primary">{slide.title}</h3>
                        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 font-secondary opacity-90 leading-relaxed mobile-min">
                          {slide.description}
                        </p>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                          <div className="flex items-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                            </svg>
                            <span>{slide.date}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <span>{slide.beneficiaries}</span>
                          </div>
                        </div>
                        
                        {/* Enhanced Thumbnail Gallery */}
                        <div className="mt-4 sm:mt-6">
                          <p className="text-xs sm:text-sm font-semibold mb-2 opacity-80">Galeri Foto:</p>
                          <div className="grid grid-cols-3 gap-1 sm:gap-2">
                            {slide.gallery.map((img, imgIndex) => (
                              <div key={imgIndex} className="relative group cursor-pointer touch-manipulation">
                                <img
                                  src={img}
                                  alt={`${slide.title} ${imgIndex + 1}`}
                                  className="w-full h-16 sm:h-20 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                  </svg>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-200 h-48 sm:h-64 md:h-auto flex items-center justify-center slide-content-right relative group">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 sm:p-3 bg-white/90 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-white/50">
                          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation Arrows */}
            <button
              className="slideshow-nav-btn absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 md:p-4 rounded-full shadow-lg z-10 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
              onClick={goToPrevSlide}
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              className="slideshow-nav-btn absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 md:p-4 rounded-full shadow-lg z-10 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Enhanced Slide Indicators */}
            <div className="flex justify-center mt-3 sm:mt-4 md:mt-6 gap-1.5 sm:gap-2" role="tablist" aria-label="Slide indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slide-indicator transition-all duration-300 ease-in-out will-change-transform will-change-opacity cursor-pointer touch-manipulation ${
                    index === currentSlide
                      ? 'bg-primary shadow-sm w-6 sm:w-8 h-2 sm:h-3'
                      : 'bg-gray-300 hover:bg-gray-400 w-3 sm:w-4 h-2 sm:h-3'
                  } rounded-full`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                />
              ))}
            </div>

          </div>

          {/* Enhanced Program Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12">
            {programStats.map((stat, index) => (
              <div key={index} className="program-stat text-center bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50">
                <div className={`w-10 h-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4`}>
                  {stat.icon}
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 font-primary">{stat.number}</h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mobile-min">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;