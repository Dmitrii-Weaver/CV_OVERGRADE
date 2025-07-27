// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if your components are in a different folder
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}