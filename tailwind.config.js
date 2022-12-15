/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
          'sm': '640px',
          'md': '769px',
          'lg': '1200px',
          
      },

    extend: {
        colors: {
            'bglight': '#f8fafc',
            'bgdark': '#0f172a'
        }
    },
    fontFamily:  {
        'code': ['fira code', 'sans-serif']
    }
  },
  plugins: [],
}
