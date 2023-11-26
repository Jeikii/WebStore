/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      colors: {
        shopeeclone: {
          background: '#F5F5F5',
          orange: '#F94C2F',
          base_orange: '#f53d2d',
          light_orange: '#f63',
          search_btn: '#ee4d2d',
          text: '#F05D40',
        },
      },
    },
  },
  plugins: [],
}
