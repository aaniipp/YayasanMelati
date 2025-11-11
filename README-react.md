# Yayasan Melati Rawasari - React Version

Website resmi Yayasan Santunan Anak Yatim Piatu dan Dhuafa Melati Rawasari yang dibangun dengan React.js dan Tailwind CSS.

## Fitur

- 🎨 **Desain Modern**: Menggunakan Tailwind CSS dengan animasi yang smooth
- 📱 **Responsive**: Tampilan optimal di semua perangkat
- 🖼️ **Galeri Interaktif**: Slideshow dengan navigasi keyboard, touch, dan auto-play
- 🎯 **Navigasi Smooth**: Scrolling halus dengan offset header
- 💳 **Informasi Donasi**: Lengkap dengan rekening bank dan konfirmasi WhatsApp
- 📊 **Struktur Organisasi**: Tampilan hierarki yang jelas
- ⚡ **Performa Tinggi**: Dioptimalkan dengan React.js

## Teknologi

- **React 18** - Library JavaScript untuk UI
- **Tailwind CSS** - Framework CSS utility-first
- **Google Fonts** - Plus Jakarta Sans & Inter
- **React Hooks** - State management dan lifecycle

## Instalasi

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```

## Menjalankan Development Server

```bash
npm start
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## Build untuk Production

```bash
npm run build
```

Build akan dihasilkan di folder `build/`.

## Struktur Proyek

```
src/
├── components/           # Komponen React
│   ├── Header.js        # Header dengan navigasi
│   ├── Hero.js          # Hero section
│   ├── About.js         # Tentang kami & struktur organisasi
│   ├── Activities.js    # Kegiatan yayasan
│   ├── Gallery.js       # Galeri dengan slideshow
│   ├── Donation.js      # Informasi donasi
│   ├── Quote.js         # Hadist tentang sedekah
│   ├── Contact.js       # Kontak dan WhatsApp
│   └── Footer.js        # Footer dengan link cepat
├── App.js               # Komponen utama
├── index.css            # Global styles & Tailwind
└── index.js             # Entry point
```

## Komponen Utama

### Header
- Navigasi responsive dengan mobile menu
- Smooth scrolling ke section
- Logo dengan animasi hover
- CTA button untuk donasi

### Gallery Slideshow
- Auto-play setiap 5 detik
- Navigasi dengan arrow buttons
- Keyboard navigation (arrow keys)
- Touch/swipe support untuk mobile
- Slide indicators dengan animasi pulse

### Donation
- Informasi rekening bank
- Copy to clipboard functionality
- Konfirmasi via WhatsApp
- Design gradient yang menarik

## Customization

### Mengubah Warna Tema
Edit file `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#1e40af',
      'secondary': '#3b82f6',
      'accent': '#dc2626',
      // ...
    }
  }
}
```

### Mengubah Font
Edit file `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      'primary': ['Plus Jakarta Sans', 'sans-serif'],
      'secondary': ['Inter', 'sans-serif'],
    }
  }
}
```

## Deployment

Website ini siap untuk di-deploy ke:
- Netlify
- Vercel
- GitHub Pages
- Static hosting lainnya

## Kontribusi

1. Fork project
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## License

© 2024 Yayasan Santunan Anak Yatim Piatu dan Dhuafa Melati Rawasari. All rights reserved.