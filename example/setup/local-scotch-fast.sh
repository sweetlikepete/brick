
cwd=$(pwd)

# quick update of scotch
cd ~/code/brick-test/brick/packages/scotch
npm run build
cp -rf ~/code/brick-test/brick/packages/scotch/lib "$cwd/src/web/node_modules/@sweetlikepete/scotch"
