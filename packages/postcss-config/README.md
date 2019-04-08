# @sweetlikepete/postcss-config

[![npm version](https://badge.fury.io/js/%40sweetlikepete%2Fpostcss-config.svg)](https://badge.fury.io/js/%40sweetlikepete%2Fpostcss-config)

This package provides a shared config for postcss and several of its plugins.

## Usage

A single postcss configuration is exported.

Our default export contains all of our postcss plugins.

### Installation

1. Install the shared configuration:

  ```sh
  yarn add --dev @sweetlikepete/postcss-config
  ```

2. Install the shared configuration peer dependencies (npm 5+):

  ```sh
  npx install-peerdeps --dev @sweetlikepete/postcss-config
  ```

3. Add to your postcss.config.js.
  ```js
  const config = require("@sweetlikepete/postcss-config");

  module.exports = config;
  ```

## Maintenance

You can run tests with `npm test`.
