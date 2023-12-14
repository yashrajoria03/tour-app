/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#242424",
      white: "#FFFFFF",
      offwhite: "#F9F6F7",
      orange: "#FF971D",
      lightOrange: "#FFE8D6",
      gray: "#E0E0E0",
    },
  },
  plugins: [],
};
