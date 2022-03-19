module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/boolean-prop-naming": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-no-useless-fragment": "error",
    // No longer required, with the new JSX transform
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/jsx-filename-extension": "off",
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
      },
    },
  ],
};
