/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./public/nav.html"],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ["Marcellus", ...defaultTheme.fontFamily.serif],
        cardo: ["Cardo", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
