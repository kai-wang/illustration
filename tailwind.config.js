/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'x-blue': '#241b57',
        'x-red': '#ec4357'
      },
      inset: {
        '2/5': '40%',
        '1/3': '30%',
        'n-9': "-9%"
      },
      borderRadius: {
        'half': '50%',
      },
      zIndex: {
        '999': '999',
      }
    }
  },
  plugins: [],
}
