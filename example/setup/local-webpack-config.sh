
cwd=$(pwd)/src/web

# local install webpack-config
cd ~/code/brick/packages/webpack-config
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd
npm install --dev "~/code/brick/$package"
