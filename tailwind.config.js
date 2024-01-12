/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      dm:["DM-Sans","sans-serif"],
      popins:["Poppins","sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}