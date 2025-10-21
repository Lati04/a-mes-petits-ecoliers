/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#fff2cc',
          200: '#ffe699',
          300: '#ffd966',
          400: '#ffcc33',
          500: '#ffbf00', // couleur principale dorée
          600: '#e6a700',
          700: '#bf8f00',
          800: '#997700',
          900: '#7f6100',
        },
        grayLight: '#f9f9f9',
        grayDark: '#242424',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
