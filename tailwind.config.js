/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{css,xml,html,vue,svelte,ts,tsx}'
  ],
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {
      colors: {
        'waze': '#3399ff',
        'waze-secondary': '#73b4ff',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}