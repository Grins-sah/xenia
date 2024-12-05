/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { backgroundImage: {
        'Map':"url('./src/assets/10078879.jpg')",
        'Schedule':"url('./src/assets/Hogwarts schedule.jpeg')"
    }},
  },
  plugins: [],
}

