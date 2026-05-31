/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00522e",
        accent: "#D21335",
        background: {
          light: "#ffffff",
          dark: "#000000",
        },
        text: {
          primary: "#000000",
          secondary: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};

