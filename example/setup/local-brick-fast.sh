
cwd=$(pwd)

# quick update of brick
cd ~/code/brick
npm run build
cp -rf ~/code/brick/lib "$cwd/node_modules/@sweetlikepete/brick"
