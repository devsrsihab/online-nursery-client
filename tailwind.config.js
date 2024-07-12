/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#81ba00",
      },
      fontFamily: {
        primary: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
