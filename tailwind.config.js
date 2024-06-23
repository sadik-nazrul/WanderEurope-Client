/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif"
      },
      colors: {
        primary: "#4DA528",
        secondary: "#0F0F2D"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "night"],
  },
}

