/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     colors: {
      ui: {
        100: "#FFF3D3",
        200: "#E3F9F6",
        300: "#455262",
        400: "#29384D",
      }
     }
    },
  },
  plugins: [],
}

