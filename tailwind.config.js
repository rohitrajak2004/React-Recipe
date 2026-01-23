/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'pacifico': ['"Pacifico"', 'cursive'],
      },
      padding: {
        '15': '3.75rem', // 60px
        '20': '5rem',    // 80px
      }
    },
  },
  plugins: [],
}
