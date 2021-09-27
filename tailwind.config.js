// const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');
module.exports = {
  purge: [
    './imports/ui/**/*.tsx',
    './client/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    forms,
  ],
};
