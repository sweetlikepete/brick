
cwd=$(pwd)

# local install eslint-config
cd ~/code/brick/packages/eslint-config
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd
npm install "~/code/brick/$package"
# eslint-config peer dependencies
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-array-func eslint-plugin-compat eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-no-loops eslint-plugin-node eslint-plugin-optimize-regex eslint-plugin-promise eslint-plugin-react eslint-plugin-security eslint-plugin-unicorn typescript

# local install babel-preset-config
cd ~/code/brick/packages/babel-preset
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd
npm install "~/code/brick/$package"
# babel-preset peer dependencies
yarn add @babel/core

# local install stylelint-config
cd ~/code/brick/packages/stylelint-config
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd
npm install "~/code/brick/$package"
# stylelint-config peer dependencies
yarn add stylelint stylelint-order stylelint-scss

# local install webpack-config
cd ~/code/brick/packages/webpack-config
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd
npm install "~/code/brick/$package"
# webpack-config peer dependencies
yarn add webpack webpack-cli
