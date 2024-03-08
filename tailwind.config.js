/** @type {import('tailwindcss').Config} */
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
        primary: "#0070f3", // Example primary color
        secondary: "#ff4081",
        blue: "var(--color-blue)",
        red: "var(--color-red)",
        purple: "var(--color-purple)",
      },
    },
  },
  plugins: [],
};
