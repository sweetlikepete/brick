
cwd=$(pwd)/src/web

# quick update of webpack-config
cd ~/code/brick/packages/webpack-config
npm run build
cp -rf ~/code/brick/packages/webpack-config/lib "$cwd/node_modules/@sweetlikepete/webpack-config"
