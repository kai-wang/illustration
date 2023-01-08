/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': {
          'min': '320px',
          'max': '768px'
        }
      },
      colors: {
        'blue': {
          "1": "var(--primary-blue)"
        },
        'red': {
          "1": "var(--primary-red)",
          "2": "var(--secondary-red)"
        }
      },
      inset: {
        '2/5': '40%',
        '1/3': '30%',
        'n-9': "-9%"
      },
      borderRadius: {
        '1/2': '50%',
      },
      zIndex: {
        '999': '999',
      }
    }
  },
  plugins: [],
}
