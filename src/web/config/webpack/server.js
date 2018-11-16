

import babelConfig from "../babel";
import clone from "clone";
import generateShared from "./shared";
import HardSourceWebpackPlugin from "hard-source-webpack-plugin";
import merge from "merge";
import nodeExternals from "webpack-node-externals";
import nodeObjectHash from "node-object-hash";
import path from "path";
import webpack from "webpack";


export default function serverConfig(){

    const shared = generateShared();

    return merge.recursive({}, clone(shared), {
        devtool: "source-maps",
        entry: path.join(process.cwd(), "src/web/server/index.js"),
        externals: [
            nodeExternals({
                whitelist: [
                    /^babel-plugin-universal-import/
                ]
            })
        ],
        mode: "development",
        module: {
            rules: clone(shared).module.rules.concat([
                {
                    exclude: /node_modules/,
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: babelConfig().server
                    }
                },
                {
                    exclude: /node_modules/,
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelConfig().server
                        },
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ])
        },
        output: {
            chunkFilename: "[name].js",
            filename: "[name].js",
            path: path.join(process.cwd(), "src/web/build/server")
        },
        plugins: shared.plugins.concat([
            new HardSourceWebpackPlugin({
                cacheDirectory: path.join(process.cwd(), "node_modules/.cache/hard-source/[confighash]"),
                cachePrune: {
                    // 2 Days
                    // eslint-disable-next-line no-magic-numbers
                    maxAge: 2 * 24 * 60 * 60 * 1000,
                    // 50 Megabytes
                    // eslint-disable-next-line no-magic-numbers
                    sizeThreshold: 50 * 1024 * 1024
                },
                configHash: (webpackConfig) => nodeObjectHash({ sort: false }).hash(webpackConfig),
                environmentHash: {
                    directories: [],
                    files: [
                        "package-lock.json",
                        "yarn.lock"
                    ],
                    root: process.cwd()
                },
                info: {
                    level: "debug",
                    mode: "none"
                }
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            }),
            new webpack.DefinePlugin({
                "process.env.CLIENT": JSON.stringify("server")
            }),
            new webpack.BannerPlugin({
                banner: "require(\"source-map-support\").install();",
                entryOnly: false,
                raw: true
            })
        ]),
        target: "node"
    });

}
