module.exports = {
  plugins: ["import"],
  rules: {
    "import/no-extraneous-dependencies": "error",
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        mjs: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
