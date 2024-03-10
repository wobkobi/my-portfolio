/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: {
          DEFAULT: "#353535",
          100: "#0b0b0b",
          200: "#151515",
          300: "#202020",
          400: "#2b2b2b",
          500: "#353535",
          600: "#5e5e5e",
          700: "#868686",
          800: "#aeaeae",
          900: "#d7d7d7",
        },
        caribbean_current: {
          DEFAULT: "#3c6e71",
          100: "#0c1617",
          200: "#182c2d",
          300: "#244344",
          400: "#30595b",
          500: "#3c6e71",
          600: "#539a9e",
          700: "#7bb6b9",
          800: "#a7ced1",
          900: "#d3e7e8",
        },
        white: {
          DEFAULT: "#ffffff",
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
        platinum: {
          DEFAULT: "#d9d9d9",
          100: "#2b2b2b",
          200: "#575757",
          300: "#828282",
          400: "#adadad",
          500: "#d9d9d9",
          600: "#e0e0e0",
          700: "#e8e8e8",
          800: "#f0f0f0",
          900: "#f7f7f7",
        },
        indigo_dye: {
          DEFAULT: "#284b63",
          100: "#080f14",
          200: "#101e27",
          300: "#182d3b",
          400: "#203c4e",
          500: "#284b63",
          600: "#3e7397",
          700: "#6099be",
          800: "#95bbd4",
          900: "#cadde9",
        },
      },
    },
    fontFamily: {
      sans: ["Roboto", ...fontFamily.sans],
      mono: ['"Roboto Mono"', ...fontFamily.mono],
    },
  },
  plugins: [],
  darkMode: "class",
};
