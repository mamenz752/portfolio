/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mamenz-blue": "#000998",
        "mamenz-green": "#8DFB21",
        "mamenz-yellow": "#FFF246",
        "mamenz-pink": "#FF0090",
      },
    },
  },
  plugins: [],
};
