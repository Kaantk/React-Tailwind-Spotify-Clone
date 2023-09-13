/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgdrop: "#121212",
        link: "#a7a7a7",
      },
    },
  },
  plugins: [],
};
