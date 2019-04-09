
cwd=$(pwd)/src/web

# local install postcss-config
cd ~/code/brick-test/brick/packages/postcss-config
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick-test
cd $cwd
npm install "~/code/brick-test/$package"
