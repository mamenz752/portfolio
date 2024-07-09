/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans JP", "sans-serif"],
        "zen-kaku": ["Zen Kaku Gothic New", "sans-serif"],
        "m-plus": ["M PLUS 1", "sans-serif"],
        lexend: ["Lexend Zetta", "sans-serif"],
      },
      colors: {
        "mamenz-blue": "#000980",
        "mamenz-green": "#8DFB21",
        "mamenz-yellow": "#FFF246",
        "mamenz-pink": "#FF0090",
        "mamenz-bg-gray": "#EEEFFF",
      },
      keyframes: {
        "animate-line": {
          from: {
            transform: "scale(0, 1)",
            transformOrigin: "center top",
          },
          to: { transform: "scale(1, 1)" },
        },
      },
      animation: {
        "animate-line": "animate-line .5s ease none",
      },
    },
  },
  plugins: [],
};
