import type { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0f172a',
      gray: '#5b5f62',
      'gray-light': '#9498a4',
      'gray-ultra-light': '#eaeaeb',
      'gray-dark': '#2d3134',
      vanilla: '#faf8ed',
      orange: '#f66f4d',
      'blue-dark': '#2e476b',
      'light-peach': '#ee8162'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sen: ['Sen', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
} satisfies Config
