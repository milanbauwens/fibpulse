// Import custom theme
const colors = require('./app/theme/colors.js');
const shadows = require('./app/theme/shadows.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
