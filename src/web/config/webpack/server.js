

import automationConfig from "../automation";
import clone from "clone";
import generateShared from "./shared";
import HardSourceWebpackPlugin from "hard-source-webpack-plugin";
import merge from "merge";
import nodeExternals from "webpack-node-externals";
import nodeObjectHash from "node-object-hash";
import path from "path";
import webpack from "webpack";


export default function serverConfig(){

    const config = automationConfig();
    const shared = generateShared("server");

    return merge.recursive({}, clone(shared), {
        externals: [
            nodeExternals({
                whitelist: [
                    /^babel-plugin-universal-import/
                ]
            })
        ],
        module: {
            rules: clone(shared).module.rules.concat([])
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
            new webpack.BannerPlugin({
                banner: "require(\"source-map-support\").install();",
                entryOnly: false,
                raw: true
            })
        ]),
        target: "node"
    });

}
