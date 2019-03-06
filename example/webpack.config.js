
/*

eslint

@typescript-eslint/no-var-requires: "off",
import/no-commonjs: "off",
import/no-extraneous-dependencies: "off",
import/unambiguous: "off",
node/no-extraneous-require: "off"

*/

const path = require("path");

const config = require("@sweetlikepete/webpack-config");


module.exports = config({
    entry: "src/web/client/index.ts",
    output: {
        path: path.join(process.cwd(), "src/web/build/client"),
        publicPath: "/static/"
    }
}, {
    mode: "production",
    target: "web"
});
