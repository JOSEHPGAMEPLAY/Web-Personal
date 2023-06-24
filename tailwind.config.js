/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'Lilita':['Lilita one']
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated'),require('@tailwindcss/forms')
  ],
}

