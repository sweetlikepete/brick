

const AssetsPlugin = require("assets-webpack-plugin");
const babelConfig = require("../babel");
const clone = require("clone");
const generateShared = require("./shared");
const merge = require("merge");
const path = require("path");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const webpack = require("webpack");


module.exports = function clientConfig(){

    const shared = generateShared();
    const production = global.AUTOMATION.production;

    return merge.recursive({}, clone(shared), {
        entry: path.join(process.cwd(), "src/web/client/index.js"),
        module: {
            rules: clone(shared).module.rules.concat([
                {
                    exclude: /node_modules/,
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: babelConfig.client
                    }
                },
                {
                    exclude: /node_modules/,
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelConfig.client
                        },
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ])
        },
        output: {
            chunkFilename: production ? "[chunkhash].js" : "[name].js",
            filename: production ? "[chunkhash].js" : "[name].js",
            path: path.join(process.cwd(), "src/web/build/client"),
            publicPath: "/💩/"
        },
        plugins: [
            new AssetsPlugin({
                filename: "src/web/build/client/webpack-assets.json",
                fullpath: true
            }),
            new ReactLoadablePlugin({
                filename: path.join(process.cwd(), "src/web/build/client/react-loadable-stats.json")
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HashedModuleIdsPlugin()
        ],
        stats: {
            publicPath: true
        },
        target: "web"
    });

};
