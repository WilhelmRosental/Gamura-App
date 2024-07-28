/** @type {import('tailwindcss').Config} */
const { slateDark } = require('@radix-ui/colors');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateDark: {
          1: slateDark.slate1,
          2: slateDark.slate2,
          3: slateDark.slate3,
          4: slateDark.slate4,
          5: slateDark.slate5,
          6: slateDark.slate6,
          7: slateDark.slate7,
          8: slateDark.slate8,
          9: slateDark.slate9,
          10: slateDark.slate10,
          11: slateDark.slate11,
          12: slateDark.slate12,
        },
      },
    },
  },
  plugins: [],
};