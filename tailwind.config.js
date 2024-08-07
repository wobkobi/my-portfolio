/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      jet: {
        DEFAULT: "#282b2d",
        100: "#080909",
        200: "#101212",
        300: "#181a1c",
        400: "#212325",
        500: "#282b2d",
        600: "#51575b",
        700: "#788288",
        800: "#a5abaf",
        900: "#d2d5d7",
      },
      caribbean_current: {
        DEFAULT: "#539a9e",
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
};
export const plugins = [];
export const darkMode = "class";
