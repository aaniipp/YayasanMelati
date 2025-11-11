import React from 'react';

const Quote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-primary">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 font-primary">Hadist Tentang Sedekah</h3>
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed mobile-min italic font-secondary">
              "Nabi shallallahu 'alaihi wa sallam adalah orang yang paling gemar bersedekah. Semangat beliau dalam bersedekah lebih membara lagi ketika bulan Ramadhan tatkala itu Jibril menemui beliau. Jibril menemui beliau setiap malamnya di bulan Ramadhan. Jibril mengajarkan Al-Qur'an kala itu. Dan Rasul shallallahu 'alaihi wa sallam adalah yang paling semangat dalam melakukan kebaikan bagai angin yang bertiup"
            </blockquote>
            <p className="text-sm text-gray-500 mt-4 text-right font-secondary">(HR. Bukhari no. 3554 dan Muslim no. 2337)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Quote);