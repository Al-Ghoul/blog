const js = require("@eslint/js");
const astro = require("eslint-plugin-astro");
const astroParser = require("astro-eslint-parser");
const svelte = require("eslint-plugin-svelte");
const svelteParser = require("svelte-eslint-parser");
const tsParser = require("@typescript-eslint/parser");
const globals = require("globals"); 

module.exports = [
  js.configs.recommended,

  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
      },
      globals: {
        ...globals.browser,
        window: "readonly",
        document: "readonly",
        console: "readonly",
        ImageMetadata: "readonly",
      },
    },
    plugins: { astro },
  },

  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
      globals: {
        ...globals.browser,
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    plugins: { svelte },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },

  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    ignores: ["**/node_modules/", "**/.git/", "**/dist/", "**/build/"],
  },
];
