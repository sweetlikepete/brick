
cwd=$(pwd)

# quick update of brick
cd ~/code/brick-test/brick
npm run build
cp -rf ~/code/brick-test/brick/lib "$cwd/node_modules/@sweetlikepete/brick"

# quick update of webpack-config
cd ~/code/brick-test/brick/packages/webpack-config
npm run build
cp -rf ~/code/brick-test/brick/packages/webpack-config/lib "$cwd/node_modules/@sweetlikepete/webpack-config"
