
cwd=$(pwd)/src/web

# quick update of postcss-config
cd ~/code/brick/packages/postcss-config
npm run build
cp -rf ~/code/brick/packages/postcss-config/lib "$cwd/node_modules/@sweetlikepete/postcss-config"
