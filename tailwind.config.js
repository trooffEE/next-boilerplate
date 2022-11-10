/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: '#0B0A0A'
      },
      primary: {
        DEFAULT: '#65EBBB',
        light: '#E3FFF5',
        emphasis: '#9DFDDB',
        dark: '#30CF93',
        transparent: '#65EBBB21'
      },
      red: {
        DEFAULT: '#FF344C',
        light: '#FF7081',
        transparent: '#FF344C21'
      },
      blue: {
        DEFAULT: '#33B6FF',
        light: '#8AD5FF',
        emphasis: '#004EC1',
        dark: '#0077FF',
        transparent: '#8AD5FF21'
      },
      yellow: {
        DEFAULT: '#FCFF5E',
        light: '#FDFFAF',
        transparent: '#FCFF5E21'
      },
      orange: {
        DEFAULT: '#FC8F55',
        light: '#FDC7AA',
        transparent: '#FC8F5521'
      },
      purple: {
        DEFAULT: '#B199F0',
        purple: '#D8CCF7',
        transparent: '#B199F021'
      },
      font: {
        DEFAULT: '#000000',
        light: '#FFFFFF'
      },
      grey: {
        100: '#FBFBFB',
        200: '#F4F4F4',
        300: '#CFCFCF',
        400: '#ABABAB',
        500: '#868686',
        600: '#494949'
      }
    },
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))'
      }
    },
    screens: {
      tablet: '375px',
      laptop: '1024px',
      desktop: '1440px'
    }
  },
  plugins: []
}
