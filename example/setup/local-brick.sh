
cwd=$(pwd)
cd ~/code/brick-test/brick
npm run prepublishOnly
package=$(npm pack)
mv $package ~/code/brick-test
cd $cwd
npm install "~/code/brick-test/$package" --save-dev

