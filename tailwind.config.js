// Import custom theme
const colors = require('./app/theme/colors.js');
const shadows = require('./app/theme/shadows.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '320px' },
      // => @media (max-width: 320px) { ... }

      md: { min: '320px', max: '379px' },
      // => @media (min-width: 320px and max-width: 379px) { ... }

      lg: { min: '380px', max: '419px' },
      // => @media (min-width: 380px and max-width: 419px) { ... }

      xl: { min: '420px', max: '480px' },
      // => @media (min-width: 420px and max-width: 480px) { ... }
    },
    extend: {
      colors,
      shadows,
    },
  },
  variants: {
    extend: {
      border: ['last'],
    },
  },
  plugins: [],
};
