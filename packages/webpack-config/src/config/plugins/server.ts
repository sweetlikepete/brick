

import webpack, { Configuration } from "webpack";


export default function configuration(): Configuration{

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
