module.exports = {
  overrides: [
    {
      files: ["*.test.*", "*.spec.*"],
      env: {
        node: true,
        jest: true,
        mocha: true,
      },
      rules: {},
    },
  ],
};
