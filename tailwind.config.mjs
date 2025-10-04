/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ovo: ["var(--font-ovo)", ...fontFamily.serif],
        outfit: ['var(--font-outfit)'],
      },
      boxShadow:{
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      }
    },
  },
  plugins: [],
};