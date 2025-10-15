import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  { ignores: ["node_modules/**", "dist/**"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Test globals
        describe: true,
        test: true,
        it: true,
        expect: true,
        global: true,
        // Node.js globals (for config files, env vars, etc.)
        require: true,
        module: true,
        process: true,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
