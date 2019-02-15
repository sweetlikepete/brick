# local install eslint-config
cd ~/code/brick-test/brick/src/packages/eslint-config
npm pack
mv sweetlikepete-eslint-config-1.0.11.tgz ~/code/brick-test
cd ~/code/brick-test/brick
yarn add ~/code/brick-test/sweetlikepete-eslint-config-1.0.11.tgz
# eslint-config peer dependencies
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-array-func eslint-plugin-compat eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-no-loops eslint-plugin-node eslint-plugin-optimize-regex eslint-plugin-promise eslint-plugin-react eslint-plugin-security eslint-plugin-unicorn typescript
