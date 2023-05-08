/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      light: {
        lth: '#F2E8FF',
        bg1: '#EFEBFF',
        bg2: '#D4C9FF',
        nav: '#C7B9FF',
        form: '#9980FF',
        selec: '#2F20D3',
        btn: '#260162',
        rose: '#E10A4B',
        green: '#1DAD69'
      }
    }
  },
  plugins: []
}
