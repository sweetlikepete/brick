

import clone from "clone";
import generateShared from "./shared";
import merge from "merge";
import nodeExternals from "webpack-node-externals";
import nodeObjectHash from "node-object-hash";
import path from "path";
import webpack from "webpack";


export default function serverConfig(){

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
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            }),
            new webpack.BannerPlugin({
                banner: "require(\"source-map-support\").install();",
                entryOnly: false,
                raw: true,
                test: /\.js$/
            })
        ]),
        target: "node"
    });

}
