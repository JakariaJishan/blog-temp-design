/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./public/nav.html",
    "./public/home2.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ["Marcellus", ...defaultTheme.fontFamily.serif],
        cardo: ["Cardo", ...defaultTheme.fontFamily.serif],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
