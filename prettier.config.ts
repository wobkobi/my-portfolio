// prettier.config.ts
import type { Config } from "prettier";

const config: Config = {
  $schema: "https://json.schemastore.org/prettierrc",
  // organize-imports must run before tailwindcss; the Tailwind plugin has to be last.
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["cn", "clsx"],

  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",

  overrides: [
    { files: ["*.md", "*.mdx"], options: { proseWrap: "always" } },
    { files: ["*.json", "*.yml", "*.yaml"], options: { singleQuote: false } },
  ],
};

export default config;
