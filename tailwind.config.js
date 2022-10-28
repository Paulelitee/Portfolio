/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'header': ['Black han sans ', 'display'],
      'text': ['anton', 'sans-serif'],
      'code': ['fira code', 'display'],
      
    },

    colors: {
      'base': '#090913',
      'accent': '#63FBD7',
      'secondary': '#fcd34d',
      'text1': '#cbd5e1'
    },

    screens:  {
      'sm': {'min': '1px', max: '767px'}
    }
  },

    extend: {
     
  },
  plugins: [],
}