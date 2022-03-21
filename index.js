module.exports = {
  extends: [
    "eslint:recommended",
    "./import",
    // "./javascript",
    "./storybook",
    "./testing",
    "./typescript",
    // Note: must be last in list
    // Note: This auto configures the eslint-config-prettier too!
    "plugin:prettier/recommended",
  ],
  plugins: ["unicorn"],
  env: {
    es6: true,
    es2020: true,
    node: true,
    browser: true,
  },
  rules: {
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "unicorn/filename-case": ["error", { case: "kebabCase" }],
    "no-redeclare": "off",
    "no-template-curly-in-string": "error",
    "no-unsafe-negation": "error",
    "func-style": ["error", "expression"],
    "new-cap": ["error", { newIsCap: true, capIsNew: true }],
    "newline-before-return": "error",
    "no-lonely-if": "error",
    "no-unneeded-ternary": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    // "rest-spread-spacing": ["error"],
    "no-case-declarations": "off",
    "no-console": "off",
    "no-extra-boolean-cast": "off",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],

    /**
     * The following styles are also controlled via PrettierJS
     *
     * Enabling any of these rules will take precedence
     */

    // "space-unary-ops": [
    //   "error",
    //   {
    //     words: false,
    //     nonwords: false,
    //     overrides: {
    //       "!": true,
    //       "!!": true,
    //     },
    //   },
    // ],
    // "array-bracket-spacing": ["error", "never"],
    // "block-spacing": "error",
    // "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    // "comma-dangle": ["error", "always-multiline"],
    // "comma-spacing": ["error", { before: false, after: true }],
    // "computed-property-spacing": ["error", "never"],
    // "eol-last": ["error", "always"],
    // "func-call-spacing": ["error", "never"],
    // "indent": [
    //   "error",
    //   2,
    //   {
    //     VariableDeclarator: { var: 1, let: 1, const: 1 },
    //     SwitchCase: 1,
    //   },
    // ],
    // "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    // "keyword-spacing": [
    //   "error",
    //   {
    //     before: false,
    //     after: true,
    //     overrides: {
    //       as: { before: true },
    //       if: { after: false },
    //       for: { after: false },
    //       from: { before: true },
    //       else: { after: false },
    //       switch: { after: false },
    //       of: { before: true },
    //     },
    //   },
    // ],
    // "new-parens": "error",
    // "no-trailing-spaces": "error",
    // "space-before-blocks": ["error", "never"],
    // "space-before-function-paren": [
    //   "error",
    //   {
    //     anonymous: "never",
    //     named: "never",
    //     asyncArrow: "always",
    //   },
    // ],
    // "arrow-parens": ["error", "as-needed"],
    // "generator-star-spacing": ["error", "after"],
  },
};
