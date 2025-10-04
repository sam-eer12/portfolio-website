// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily:{
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif']
      }
    },
  },
  plugins: [
    // Add any plugins here
  ],
};