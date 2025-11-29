/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx,ts,tsx}',
    './src/App.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
