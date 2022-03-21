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

```js
// .eslintrc.js
module.exports = {
  extends: "tgallacher",
  // ... rest of your ESlint config
};
```
