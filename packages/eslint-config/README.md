# @sweetlikepete/eslint-config

[![npm version](https://badge.fury.io/js/%40sweetlikepete%2Feslint-config.svg)](https://badge.fury.io/js/%40sweetlikepete%2Feslint-config)

This package provides a shared config for eslint and several of its plugins.

Optionally, it also includes support for eslinting typescript.

## Usage

A single ESLint configuration is exported.

Our default export contains all of our ESLint rules, including ECMAScript 6+ and several plugins. It requires the following peer dependencies:

```
    @typescript-eslint/eslint-plugin
    @typescript-eslint/parser
    eslint
    eslint-plugin-array-func
    eslint-plugin-compat
    eslint-plugin-eslint-comments
    eslint-plugin-import
    eslint-plugin-no-loops
    eslint-plugin-node
    eslint-plugin-optimize-regex
    eslint-plugin-promise
    eslint-plugin-react
    eslint-plugin-security
    eslint-plugin-unicorn
    typescript
```

### Installation

1. Install the shared configuration:

  ```sh
  yarn add --dev @sweetlikepete/eslint-config
  ```

2. Install the shared configuration peer dependencies (npm 5+):

  ```sh
  npx install-peerdeps --dev @sweetlikepete/eslint-config
  ```

3. Add this to your .eslintrc.

  ```json
    "extends": "@sweetlikepete"
  ```

4. If you want to lint typescript, add this to your .eslintrc instead.

  ```json
    "extends": "@sweetlikepete/eslint-config/lib/configs/typescript"
  ```

## Maintenance

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.