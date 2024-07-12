/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#81ba00",
        primary200: "#cde399",
        primary300: "#8ec11a",
        primary600: "#74a700",
        primary700: "#5a8200",
      },
      fontFamily: {
        primary: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
