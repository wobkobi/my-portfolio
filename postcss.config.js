// postcss.config.js
// Tailwind v4 handles vendor prefixing via Lightning CSS, driven by the
// browserslist field in package.json, so no autoprefixer step is needed.

/** @type {import('postcss').Config} */
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
