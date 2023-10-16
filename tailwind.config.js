/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      darkMode: "class",
      fontFamily: {
        inter: ["'Inter', sans-serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gray: "rgba(37, 37, 37, 0.20)",
        "light-black": "#252525",
        "tube-red": "#FF1F3D",
        "dark-black": "#171717",
        "gray-7": "rgba(23, 23, 23, 0.70)",
      },
    },
  },
  plugins: [require("daisyui")],
};
