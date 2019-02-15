# @sweetlikepete/stylelint-config

[![npm version](https://badge.fury.io/js/%40sweetlikepete%2Fstylelint-config.svg)](https://badge.fury.io/js/%40sweetlikepete%2Fstylelint-config)

This package provides a shared config for stylelint and several of its plugins.

## Usage

A single stylelint configuration is exported.

Our default export contains all of our stylelint rules. It requires the following peer dependencies:

```
    stylelint
    stylelint-order
    stylelint-scss
```

### Installation

1. Install the shared configuration:

  ```sh
  yarn add --dev @sweetlikepete/stylelint-config
  ```

2. Install the shared configuration peer dependencies (npm 5+):

  ```sh
  npx install-peerdeps --dev @sweetlikepete/stylelint-config
  ```

3. Add `"extends": "@sweetlikepete/stylelint-config"` to your .stylelintrc.

## Maintenance

You can run tests with `npm test`.
