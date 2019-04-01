
cwd=$(pwd)

# quick update of brick
cd ~/code/brick-test/brick
npm run build
cp -rf ~/code/brick-test/brick/lib "$cwd/node_modules/@sweetlikepete/brick"
