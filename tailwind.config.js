/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        "mamenz-blue": "#000980",
        "mamenz-green": "#8DFB21",
        "mamenz-yellow": "#FFF246",
        "mamenz-pink": "#FF0090",
        "mamenz-bg-gray": "#EEEFFF",
      },
    },
  },
  plugins: [],
};
