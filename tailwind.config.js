/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#343964",
          "100": "#393F6E",
          "200": "#E2E4F3"
        },
        secondary: {
          red: "#DD524C",
          blue: "#3E9FFF",
          gray: "#8B8EAB",
          light: "#FFECC8"
        },
        background: "url('/bg.jpg')"
      }
    },
  },
  plugins: [],
}

