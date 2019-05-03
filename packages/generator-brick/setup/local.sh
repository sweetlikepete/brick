
cwd=$(pwd)
cd ~/code/brick
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick
cd $cwd
npm install "~/code/brick/$package" --save-dev