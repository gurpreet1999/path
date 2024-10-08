/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
          '3xl': '1920px',
          // => @media (min-width: 1920px) { ... }
      }
  },
  },
  plugins: [],
}

