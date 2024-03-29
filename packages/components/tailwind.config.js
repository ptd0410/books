/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: "#ff0000",
      },
      boxShadow: {
        1: "0px -1px 6px #888888",
      },
    },
  },
  plugins: [],
};
