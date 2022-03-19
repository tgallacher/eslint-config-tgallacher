module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      parser: "babel-eslint",
      parserOptions: {
        ecmaVersion: 2020,
        // sourceType: 'module',
      },
    },
  ],
};
