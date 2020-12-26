module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-1': '#111111',
        'black-2': '#222222'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
