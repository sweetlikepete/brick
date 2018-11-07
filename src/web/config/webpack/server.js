

const babelConfig = require("../babel");
const clone = require("clone");
const generateShared = require("./shared");
const merge = require("merge");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");


module.exports = function serverConfig(){

    const shared = generateShared();

    return merge.recursive({}, clone(shared), {
        entry: path.join(process.cwd(), "src/web/server/index.js"),
        externals: [
            nodeExternals({
                whitelist: [
                    /^babel-plugin-universal-import/
                ]
            })
        ],
        module: {
            rules: clone(shared).module.rules.concat([
                {
                    exclude: /node_modules/,
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: babelConfig.server
                    }
                },
                {
                    exclude: /node_modules/,
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelConfig.server
                        },
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ])
        },
        output: {
            filename: "[name].js",
            path: path.join(process.cwd(), "src/web/build/server")
        },
        plugins: shared.plugins.concat([
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.DefinePlugin({
                "process.env.CLIENT": JSON.stringify("server")
            }),
            new webpack.BannerPlugin({
                banner: "require(\"source-map-support\").install();",
                entryOnly: false,
                raw: true
            }),
            new webpack.IgnorePlugin(/\.(css|scss)$/),
            new webpack.NormalModuleReplacementPlugin(/\.css|scss$/, "node-noop")
        ]),
        target: "node"
    });

};
