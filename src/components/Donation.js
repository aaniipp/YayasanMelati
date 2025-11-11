import React from 'react';
import { copyAccountNumber } from '../utils/clipboardUtils';

const Donation = () => {

  const bankAccounts = [
    {
      name: 'Bank Syariah Indonesia',
      code: 'Kode Bank: 451',
      number: '88 444 222 11',
      accountName: 'a.n. Yayasan Melati Rawasari',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1h18zm-4-6v4H7v-4h10zm3-2H4V8h16v2zm0-4H4V4h16v2z"/>
        </svg>
      )
    },
    {
      name: 'Bank Central Asia',
      code: 'Kode Bank: 014',
      number: '579 047 9396',
      accountName: 'a.n. Yayasan Santunan Anak Yatim Piatu Dhuafa Melati Rawasari',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1h18zm-4-6v4H7v-4h10zm3-2H4V8h16v2zm0-4H4V4h16v2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="donasi" className="py-12 sm:py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-primary">Donasi Sekarang</h2>
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-secondary opacity-90 leading-relaxed mobile-normal px-4">
            Setiap rupiah yang Anda sumbangkan adalah investasi untuk masa depan mereka, membuka pintu harapan bagi generasi yang lebih cerah.
          </p>
        </div>

        {/* Bank Accounts */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 font-primary">Transfer ke Rekening Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {bankAccounts.map((bank, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    {bank.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold font-primary">{bank.name}</h4>
                    <p className="text-xs sm:text-sm opacity-80">{bank.code}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xl sm:text-2xl font-bold font-primary">{bank.number}</p>
                  <p className="text-xs sm:text-sm mobile-normal">{bank.accountName}</p>
                  <button
                    onClick={() => copyAccountNumber(bank.number)}
                    className="mt-3 w-full px-4 py-2 sm:py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white font-semibold transition-all duration-300 mobile-normal text-sm sm:text-base"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                      </svg>
                      <span>Salin Nomor Rekening</span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Notification Info */}
          <div className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <h4 className="text-lg sm:text-xl font-bold font-primary">Konfirmasi Transfer</h4>
            </div>
            <p className="text-sm sm:text-base mobile-normal leading-relaxed mb-4">
              Setelah melakukan transfer, mohon konfirmasi melalui WhatsApp dengan format:<br/>
              <strong>Nama#Jumlah#Program#Tanggal Transfer</strong><br/>
              Kami akan mengirimkan bukti terima kasih dan laporan donasi Anda.
            </p>
            <div className="text-center">
              <a
                href="https://wa.me/628128018272?text=Assalamu'alaikum,%20saya%20ingin%20konfirmasi%20donasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 mobile-normal text-sm sm:text-base w-full sm:w-auto"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Konfirmasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;