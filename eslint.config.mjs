import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// eslint-disable-next-line import/no-default-export
export default defineConfig([
  globalIgnores([
    "**/codegen.ts",
    "node_modules/**/*",
    "coverage/**/*",
    "src/assets/**/*",
    "src/__generated__/**/*",
    "src/queries/**/*",
    "src/fragments/**/*",
    "**/.eslintrc",
    "dist",
    "**/*.woff2",
    "**/*.woff",
    "**/*.ttf",
    "**/*.styl",
    "**/*.svg",
    "**/*.json",
    "**/*.png",
    "**/*.webp",
    "**/*.txt",
    "**/*.css",
    "**/*.xml",
    "**/*.html",
    "**/*.otf",
    "**/*.gif",
    "**/*.mp4",
    "**/*.ejs",
    "**/*.ico",
    "**/*.md",
  ]),
  {
    extends: compat.extends(
      "next/core-web-vitals",
      "eslint:recommended",
      "prettier",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:@typescript-eslint/recommended",
    ),

    plugins: {
      "react-refresh": reactRefresh,
      // import: fixupPluginRules(_import),
      prettier,
      "jsx-a11y": jsxA11Y,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    settings: {
      react: {
        version: "18.2",
      },

      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },

      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],

      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },

        typescript: {},
      },

      alias: {
        map: [["@/*", "./src"]],
      },
    },

    rules: {
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],

      "import/no-unused-modules": "off",
      "import/no-cycle": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "import/no-unresolved": "error",
      "import/no-default-export": "error",
      "import/no-named-as-default": "error",
      "import/named": "error",
      "import/no-named-default": "error",

      "import/order": [
        "error",
        {
          "newlines-between": "never",
          warnOnUnassignedImports: true,

          alphabetize: {
            order: "asc",
            caseInsensitive: false,
          },

          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],

          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/pages/**",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/features/**/*.tsx",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/components/**/*.tsx",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/**/*.tsx",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/features/**/*.ts",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/components/**/*.ts",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/hooks/**",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/utils/**",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/queries/**",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/constants/**",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/assets/**",
              position: "after",
            },
            {
              group: "external",
              pattern: "@/__generated__/**",
              position: "after",
            },
            {
              group: "object",
              pattern: "./*.svg",
              position: "after",
            },
            {
              pattern: "./*.scss",
              group: "object",
              position: "after",
            },
          ],

          pathGroupsExcludedImportTypes: ["react"],
        },
      ],

      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/anchor-has-content": "warn",
      "jsx-a11y/control-has-associated-label": "warn",
      "jsx-a11y/no-noninteractive-tabindex": "warn",

      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          required: {
            some: ["nesting", "id"],
          },
        },
      ],

      "react/jsx-props-no-spreading": "off",
      "react/jsx-no-bind": "off",
      "react/jsx-indent-props": "off",
      "react/require-default-props": "off",
      "react/display-name": "off",
      "react/no-did-update-set-state": "off",
      "react/no-unused-prop-types": "off",

      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".js", ".jsx", ".tsx"],
        },
      ],

      "react/jsx-no-useless-fragment": "error",
      "react/jsx-no-constructed-context-values": "error",
      "react/jsx-props-no-multi-spaces": "error",
      "react/no-unused-class-component-methods": "error",
      "react/no-unused-state": "error",
      "react/no-children-prop": "warn",
      "react/no-array-index-key": "error",
      "react/no-unstable-nested-components": "warn",
      "react/no-unknown-property": "error",

      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
        },
      ],

      "react/static-property-placement": "warn",
      "react/default-props-match-prop-types": "error",
      "react/destructuring-assignment": "warn",
      "react/forbid-prop-types": "error",
      "react/prop-types": "error",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-shadow": "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            "React.FunctionComponent":
              "There is a problem with it described in https://github.com/facebook/create-react-app/pull/8177",
            FunctionComponent:
              "There is a problem with it described in https://github.com/facebook/create-react-app/pull/8177",
            "React.FC":
              "There is a problem with it described in https://github.com/facebook/create-react-app/pull/8177",
            FC: "There is a problem with it described in https://github.com/facebook/create-react-app/pull/8177",
          },
        },
      ],
      "no-unused-expressions": "error",
      "no-void": "off",
      "no-continue": "off",
      "no-unused-vars": "off",
      "no-restricted-imports": [
        "error",
        {
          paths: ["lodash"],
        },
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 2,
          maxEOF: 1,
        },
      ],
      "no-extra-semi": "error",
      "no-unexpected-multiline": "error",
      "no-empty": "error",
      "no-console": "error",
      "no-return-await": "warn",
      "no-await-in-loop": "warn",
      "no-plusplus": "warn",
      "no-bitwise": "warn",
      "no-shadow": "off",
      "no-restricted-syntax": "warn",
      "no-restricted-exports": "warn",
      "no-use-before-define": "warn",
      "no-nested-ternary": "error",
      "no-param-reassign": "warn",
      "no-mixed-operators": "warn",
      "no-underscore-dangle": [
        "warn",
        {
          allow: ["__typename"],
        },
      ],
      "max-len": "off",
      "default-case": "off",
      "key-spacing": "off",
      "comma-dangle": "off",
      "quote-props": "off",
      "prefer-const": "off",
      "array-bracket-spacing": "off",
      "lines-between-class-members": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "object-curly-spacing": ["error", "always"],
      "consistent-return": "warn",
      "semi-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "prefer-destructuring": "warn",
      "guard-for-in": "warn",
      "default-param-last": "warn",
      "global-require": "warn",
      "class-methods-use-this": "warn",
      "max-params": [
        "error",
        {
          max: 7,
        },
      ],
      complexity: [
        "error",
        {
          max: 15,
        },
      ],
    },
  },
]);
