const path = require("path");

const packageJsonPath = path.resolve(process.cwd(), "package.json");
const packageJson = require(packageJsonPath); // eslint-disable-line import/no-dynamic-require

// note: Does not support the situation when the `nohoist` option is used
// @see https://classic.yarnpkg.com/blog/2018/02/15/nohoist/
const tsconfigPath = Array.isArray(packageJson.workspaces)
  ? packageJson.workspaces.map((workspacePath) =>
      path.join(process.cwd(), workspacePath, "/tsconfig.json"),
    )
  : "tsconfig.json";

module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
      parserOptions: {
        project: tsconfigPath,
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            alwaysTryTypes: true,
            project: tsconfigPath,
          },
        },
      },
      rules: {
        // If enabled, all exported functions require explicit return types
        "@typescript-eslint/explicit-module-boundary-types": "off",
        // We need to use the TS version of this rule.
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        // Enables TSDoc linting.
        "tsdoc/syntax": "warn",
      },
    },
  ],
};
