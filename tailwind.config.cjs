/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        900: '#262626',
        800: '#353535',
        500: '#717072',
        100: '#DADADA',
      },
      cyan: {
        500: '#61DAFB',
        300: '#89E3FC',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter,sans-serif',
      }
    },
  },
  plugins: [],
}
