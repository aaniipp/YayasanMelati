/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Plus Jakarta Sans', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#1e40af',
        'secondary': '#3b82f6',
        'accent': '#dc2626',
        'success': '#16a34a',
        'warning': '#f59e0b',
      },
      fontSize: {
        'mobile-min': ['16px', '1.5'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInFromLeft 0.8s ease-out',
        'slide-in-right': 'slideInFromRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse': 'pulse 2s infinite',
      }
    },
  },
  plugins: [],
}