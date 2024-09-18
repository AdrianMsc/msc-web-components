/** @type {import('tailwindcss').Config} */
const colors = require('./utilities/colors');

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
