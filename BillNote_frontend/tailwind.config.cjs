/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector', // 或者使用 'class' 如果你更喜欢使用类名
  theme: {
    extend: {},
  },
  plugins: [],
}
