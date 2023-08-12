// Import custom theme
const colors = require('./app/theme/colors.js');
const shadows = require('./app/theme/shadows.js');
// const screens = require('./app/theme/screens.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      small: { max: '280px' },
      medium: { min: '281px', max: '320px' },
      large: { min: '321px', max: '380px' },
      xlarge: { min: '381px' },
    },
    extend: {
      colors,
      boxShadow: {
        ...shadows,
      },
    },
  },
  variants: {
    extend: {
      border: ['last'],
    },
  },
  plugins: [],
};
