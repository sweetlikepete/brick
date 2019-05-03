
cwd=$(pwd)

# local install scotch
cd ~/code/brick/packages/scotch
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd/src/web
npm install "~/code/brick/$package"
