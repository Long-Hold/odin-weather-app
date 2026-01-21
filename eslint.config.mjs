import js from "@eslint/js";
import globals from "globals";

export default [
  // Recommended rules
  js.configs.recommended,
  
  // Browser environment for your source code
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        require: 'readonly',
      },
    },
  },
  
  // Node environment for webpack config files
  {
    files: ["webpack.*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
];