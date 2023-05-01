import plugin from 'tailwindcss/plugin'
import {
  themeColors,
  themePlugin,
  darkMode
} from 'tailwindcss-dark-mode-plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: themeColors,
    extend: {}
  },
  plugins: [plugin(themePlugin)]
}
