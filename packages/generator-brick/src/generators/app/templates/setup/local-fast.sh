
cwd=$(pwd)

# quick update of brick
cd ~/code/brick
npm run build
cp -rf ~/code/brick/lib "$cwd/node_modules/@sweetlikepete/brick"

# quick update of webpack-config
cd ~/code/brick/packages/webpack-config
npm run build
cp -rf ~/code/brick/packages/webpack-config/lib "$cwd/node_modules/@sweetlikepete/webpack-config"

# quick update of scotch
cd ~/code/brick/packages/scotch
npm run build
cp -rf ~/code/brick/packages/scotch/lib "$cwd/src/web/node_modules/@sweetlikepete/scotch"
