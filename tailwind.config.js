/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      primaryFonSize: '12px',
      secondaryFonSize: '14px',
      tertiaryFonSize: '16px',
      quaternaryFonSize: '20px',
      quintonaryFonSize: '30px',
      sextonaryFonSize: '32px',
    },
    colors: {
      primaryColor: '#e6ecf5',
      secondaryColor: '#07469c',
      tertiaryColor: '#0099e1',
      quaternaryColor: '#ffffff',
      quintonaryColor: '#ef3061',
      sextonaryColor: '#333333',
      septonaryColor: '#757575',
      octenaryColor: '#f2f2f2',
    },
    fontFamily: {
      primaryFontFamily: ['Mulish', 'sans-serif'],
      secondaryFontFamily: ['Nunito', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
