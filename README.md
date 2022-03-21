# eslint-config-tgallacher

Personal ESLint configuration preferences.

<!-- TOC -->

- [Installation](#installation)
- [Usage](#usage)

<!-- /TOC -->

<a id="markdown-installation" name="installation"></a>

## Installation

This config is distributed via [npmjs](https://npmjs.com) and can be installed via

```sh
yarn add -D @tgallacher/eslint-config --registry https://npm.pkg.github.com
```

<a id="markdown-usage" name="usage"></a>

## Usage

Add to `extends` in your ESLint config file:

> Note: Due to [eslint/eslint#3458](https://github.com/eslint/eslint/issues/3458), you also need to add one line to your `.eslintrc.js` file:

```js
// required to workaround eslint/eslint#3458
require("@tgallacher/eslint-config/patch/modern-module-resolution");

// .eslintrc.js
module.exports = {
  extends: "@tgallacher/eslint-config",
  // ... rest of your ESlint config
};
```
