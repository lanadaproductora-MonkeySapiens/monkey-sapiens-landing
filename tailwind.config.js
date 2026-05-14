/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0D47A1",
      secondary: "#FF7043",
      accent: "#FBC02D",
      light: "#E0F7FA",
      dark: "#263238",
      white: "#ffffff",
      blue: {
        50: "#E3F2FD",
        100: "#BBDEFB",
        200: "#90CAF9",
        500: "#2196F3",
        900: "#0D47A1",
      },
      gray: {
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        500: "#9E9E9E",
        700: "#616161",
      },
      orange: {
        600: "#E65100",
      },
      black: "#000000",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
}
