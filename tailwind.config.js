// Import custom theme
const colors = require("./app/theme/colors.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      boxShadow: {
        "top-xl": "0px -2px 16px rgba(2, 27, 27, 0.15)",
      },
    },
  },
  plugins: [],
};
