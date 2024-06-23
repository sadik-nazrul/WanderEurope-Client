/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Plus Jakarta Sans', sans-serif",
        secondary: "'Yesteryear', cursive",
      },
      colors: {
        primary: "#4DA528",
        secondary: "#1C231F"
      },
      backgroundImage: {
        keyframes: {
          zoomIn: {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.1)' },
          },
        },
        animation: {
          zoomIn: 'zoomIn 10s infinite alternate',
        },
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

