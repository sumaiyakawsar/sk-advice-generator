/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue':'#1F2632',
        'dark-grayish-blue':'#323A49',
        'grayish-blue':'#4E5D73',
        'light-cyan':'#CEE3E9',
        'neon-green':'#52FFA8'
      }
    },
  },
  plugins: [],
}

