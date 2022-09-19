/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/index.js"],
  theme: {
    colors: {
      chamois: {
        100: "#F7F1E0",
        200: "#F5EDD8",
        300: "#F3E9D1",
        400: "#F1E6C9",
        500: "#EFE2C1",
        600: "#EDDFBA",
        700: "#EBDBB2",
        800: "#D6C8A3",
        900: "#BCAF8E",
      },
    },
    extend: {
      backgroundImage: {
        background: "url('/public/background.png')",
      },
      fontFamily: {
        rodin: ["Rodin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
