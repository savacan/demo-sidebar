module.exports = {
  "parser": require.resolve("@typescript-eslint/parser"),
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "globals": {
    "__DEV__": true
  },
  "plugins": [
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "react"
  ],
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "settings": {
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
    "import/core-modules": [
      "app"
    ],
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "rules": {
    "react/prop-types": [
      0
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "import/extensions": [
      "error", "always",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    // ES2019 available in TypeScript
    "node/no-unsupported-features/es-syntax": 0,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [2, { args: "none" }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    "no-array-constructor": 0,
    "@typescript-eslint/no-array-constructor": 2,

    "@typescript-eslint/adjacent-overload-signatures": 2,
    "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
    "@typescript-eslint/prefer-namespace-keyword": 2,
    // allow require for power-assert
    // '@typescript-eslint/no-require-imports': 2,
    // "@typescript-eslint/no-var-requires": 2,
    "@typescript-eslint/no-object-literal-type-assertion": 2,

    /**
   * @description rules of eslint-plugin-react-hooks
   */
    "react-hooks/rules-of-hooks": "error",

    /**
     * @description rules of eslint-plugin-prettier
     */
    "prettier/prettier": [
      "error", {
        "singleQuote": true,
        "semi": false
      }
    ]
  }
}