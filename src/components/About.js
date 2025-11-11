import React from 'react';

const About = () => {
  const aboutCards = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      bgColor: 'bg-primary/10',
      title: 'Visi Kami',
      description: 'Menjadi yayasan terdepan dalam membantu anak yatim, piatu, dan dhuafa untuk mendapatkan pendidikan dan kehidupan yang lebih baik.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      bgColor: 'bg-success/10',
      title: 'Misi Kami',
      description: 'Menyelenggarakan program sosial, pendidikan, dan keagamaan untuk membantu anak-anak yang membutuhkan sejak tahun 1990.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
        </svg>
      ),
      bgColor: 'bg-warning/10',
      title: 'Legalitas',
      description: 'Yayasan kami telah terdaftar secara resmi dengan nomor legalitas yang valid dan diakui oleh pemerintah.'
    }
  ];

  const legalitasDetails = [
    {
      title: 'Kegiatan Keagamaan',
      description: 'Ny. Anna Suhardi SH. No. 11',
      date: 'Tanggal 5 Agustus 1990'
    },
    {
      title: 'Keputusan Menteri Hukum & HAM',
      description: 'No. AHU-AH.01.06-0036669',
      date: null
    },
    {
      title: 'Nomor Induk Berusaha',
      description: '1902220027057',
      date: 'Tahun 2022'
    }
  ];

  const organizationStructure = {
    pengawas: [
      { name: 'Abdil Kafi', role: 'Pengawas' }
    ],
    pembina: [
      { name: 'Wasi Kirana', role: 'Pembina' },
      { name: 'Norma Sanusi', role: 'Pembina' },
      { name: 'Surya Syahruzar', role: 'Pembina' }
    ],
    eksekutif: [
      { name: 'Rina Helianti, C.A.', role: 'Ketua' },
      { name: 'Hj. Juhroni Zaenal', role: 'Wakil Ketua' }
    ],
    staff: [
      { name: 'Hj. Juliani', role: 'Bendahara' },
      { name: 'Siti Nuriyah', role: 'Pendidikan' }
    ]
  };

  return (
    <section id="tentang" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-primary">Tentang Kami</h2>
          <div className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {aboutCards.map((card, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${card.bgColor} rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
                {card.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-primary text-center">{card.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed mobile-min text-sm sm:text-base">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Legalitas Details */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center font-primary">Legalitas Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {legalitasDetails.map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-primary">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 font-primary">{item.title}</h4>
                <p className="text-gray-600 mb-1 mobile-min text-sm sm:text-base">{item.description}</p>
                {item.date && <p className="text-xs sm:text-sm text-gray-500 mobile-min">{item.date}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Organization Structure */}
        <div className="organization-structure">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center font-primary">Struktur Organisasi</h3>
          
          {/* Pengawas Section */}
          <div className="mb-8 sm:mb-12">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 text-center font-primary">Pengawas</h4>
            <div className="flex justify-center px-4">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500 max-w-sm w-full">
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <h5 className="text-lg sm:text-xl font-bold text-gray-800 font-primary">{organizationStructure.pengawas[0].name}</h5>
                    <p className="text-gray-600 mobile-min text-sm sm:text-base">{organizationStructure.pengawas[0].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pembina Section */}
          <div className="mb-8 sm:mb-12">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 text-center font-primary">Pembina</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4">
              {organizationStructure.pembina.map((person, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                  <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="8.5" cy="7" r="4"/>
                        <path d="M20 8v6M23 11h-6"/>
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-gray-800 font-primary">{person.name}</h5>
                      <p className="text-gray-600 mobile-min text-sm sm:text-base">{person.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Section */}
          <div className="mb-8 sm:mb-12">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 text-center font-primary">Pimpinan Eksekutif</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {organizationStructure.eksekutif.map((person, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                  <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-gray-800 font-primary">{person.name}</h5>
                      <p className="text-gray-600 mobile-min text-sm sm:text-base">{person.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Staff Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 text-center font-primary">Staf Administrasi</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {organizationStructure.staff.map((person, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-500">
                  <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {person.role === 'Bendahara' ? (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                      )}
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg sm:text-xl font-bold text-gray-800 font-primary">{person.name}</h5>
                      <p className="text-gray-600 mobile-min text-sm sm:text-base">{person.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;