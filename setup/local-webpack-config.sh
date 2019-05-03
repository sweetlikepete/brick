
cwd=$(pwd)

# local install webpack-config
cd ~/code/brick/packages/webpack-config
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd
npm install "~/code/brick/$package"
# webpack-config peer dependencies
yarn add webpack webpack-cli
