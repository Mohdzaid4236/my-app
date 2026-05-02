/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57',
        secondary: '#9DC183',
        backdrop: '#0f172a',
      },
    },
  },
  plugins: [],
}
