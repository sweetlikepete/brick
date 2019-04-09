
cwd=$(pwd)/src/web

# local install webpack-config
cd ~/code/brick-test/brick/packages/webpack-config
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick-test
cd $cwd
npm install --dev "~/code/brick-test/$package"
