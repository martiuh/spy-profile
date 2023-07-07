/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#cdeaeb",
          200: "#acdcde",
          300: "#8bced1",
          400: "#6ac0c3",
          500: "#49b2b6",
          600: "#3c9295",
          700: "#2e7174",
          800: "#215153",
          900: "#143132",
        },
        primary: {
          50: "#fdeaf6",
          100: "#f9c0e5",
          200: "#f496d4",
          300: "#f06cc3",
          400: "#f06cc3",
          500: "#ec42b2",
          600: "#e817a1",
          700: "#930f67",
          800: "#690b49",
          900: "#3f062c",
        },
        base: {
          50: "#b9ffdb",
          100: "#5dffab",
          200: "#2eff93",
          300: "#5CFFAA",
          400: "#00ff7b",
          500: "#00d164",
          600: "#00a24e",
          700: "#007438",
          800: "#004621",
          900: "#00170b",
        },
      },
    },
  },
  plugins: [],
};
