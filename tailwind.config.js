/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        'backInLeft':{
          '0%':{
            transform: 'translateX(-2000px) scale(0.7)',
            opacity: '0.7',
          },
          '80%':{
            transform: 'translateX(0px) scale(0.7)',
            opacity: '0.7',
          },
          '100%':{
            transform: 'scale(1)',
            opacity: '1',
          }
        },
        'backInRight':{
          '0%':{
            transform: 'translateX(2000px) scale(0.7)',
            opacity: '0.7',
          },
          '80%':{
            transform: 'translateX(0px) scale(0.7)',
            opacity: '0.7',
          },
          '100%':{
            transform: 'scale(1)',
            opacity: '1',
          }
        }
    },
    animation: {
      'backInLeft':'backInLeft 1s both',
      'backInRight':'backInRight 1s both'
    },
    fontFamily: {
      'Lilita':['Lilita one']
    }
  }},
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated'),require('@tailwindcss/forms')
  ],
}