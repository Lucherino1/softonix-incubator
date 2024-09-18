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
      'gray-slate': '#676a6c',
      vanilla: '#faf8ed',
      orange: '#f66f4d',
      'blue-dark': '#2e476b',
      'peach-light': '#ee8162',
      'peach-ultra-light': '#ffd482'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sen: ['Sen', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'card-shadow': '0 4px 10px rgba(192, 188, 161, 0.22)'
      }
    }
  },
  plugins: []
} satisfies Config
