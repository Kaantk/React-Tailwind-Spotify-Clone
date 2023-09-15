/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1ed760",
        backgdrop: "#121212",
        link: "#a7a7a7",
        dark: {
          gray: "#181818",
        },
        light: {
          gray: "#282828",
        },
        lighest: {
          gray: "#a7a7a7",
        },
      },
    },
  },
  plugins: [],
};
