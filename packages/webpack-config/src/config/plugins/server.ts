

import webpack from "webpack";

import { IWebpackConfiguration } from "../../interfaces";


export default function configuration(): IWebpackConfiguration{

    return {
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            }),
            new webpack.BannerPlugin({
                banner: "require(\"source-map-support\").install();",
                entryOnly: false,
                raw: true,
                test: /\.js$/u
            })
        ]
    };

}
