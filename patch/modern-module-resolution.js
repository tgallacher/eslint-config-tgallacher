// Workaround for https://github.com/eslint/eslint/issues/3458
//
// Use:
//
// Consumers of this config need to add the following to their `.eslintrc.js` file:
//
// ```js
// require('@tgallacher/eslint-config/patch/modern-module-resolution');
//
// module.exports = {
//   extends: ["@tgallacher/eslint-config"],
//   rules: {
//     ...
//   }
//  }
// ```
require("@rushstack/eslint-patch/modern-module-resolution");
