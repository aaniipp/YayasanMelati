import React from 'react';

const Activities = () => {
  const activities = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      bgColor: 'bg-primary/10',
      title: 'Kegiatan Keagamaan',
      description: 'Mulai dari Iqra, tahsin, hingga murojaah Juz 30 yang dilaksanakan seminggu sekali.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      bgColor: 'bg-success/10',
      title: 'Santunan Pendidikan',
      description: 'Terdiri dari SPP bulanan, uang kegiatan sekolah, seragam, sepatu, dan peralatan penunjang pendidikan lainnya dari tingkat SD, hingga SMA/sederajat.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3zM12 8v8M8 12h8"/>
        </svg>
      ),
      bgColor: 'bg-warning/10',
      title: 'Pembagian Sembako',
      description: 'Paket untuk anak yayasan, sebagian pengurus, dan warga sekitar yang dilaksanakan setiap tiga bulan sekali.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      bgColor: 'bg-accent/10',
      title: 'Santunan Hari Raya',
      description: 'Pembagian sembako dan santunan hari raya Idul Fitri untuk anak asuh tetap dan tidak tetap.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
        </svg>
      ),
      bgColor: 'bg-purple-500/10',
      title: 'Pemotongan Hewan Qurban',
      description: 'Pemotongan dan pembagian daging kurban pada hari raya Idul Adha.'
    }
  ];

  return (
    <section id="kegiatan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-primary">Kegiatan Kami</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${activity.bgColor} rounded-full flex items-center justify-center mb-6`}>
                {activity.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-primary">{activity.title}</h3>
              <p className="text-gray-600 leading-relaxed mobile-min">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;