
cwd=$(pwd)

# quick update of scotch
cd ~/code/brick/packages/scotch
npm run build
cp -rf ~/code/brick/packages/scotch/lib "$cwd/src/web/node_modules/@sweetlikepete/scotch"
