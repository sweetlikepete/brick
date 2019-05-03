
cwd=$(pwd)/src/web

# local install postcss-config
cd ~/code/brick/packages/postcss-config
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd
npm install "~/code/brick/$package"
