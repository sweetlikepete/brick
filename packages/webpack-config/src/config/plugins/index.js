

import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UrlSafeHashPlugin from "webpack-urlsafehash-plugin";
import webpack from "webpack";

import node from "./node";
import watching from "./watching";
import web from "./web";


export default function configure(config, options){

    const base = {
        plugins: [
            // Set NODE_ENV based on the provided Webpack environment.
            new webpack.DefinePlugin({
                "process.env.mode": JSON.stringify(options.mode),
                "process.env.target": JSON.stringify(options.target)
            }),
            new UrlSafeHashPlugin(),
            new DuplicatePackageCheckerPlugin(),
            new MiniCssExtractPlugin({
                chunkFilename: options.hashFileNames ? `[chunkhash:${ options.hashLength }].css` : "[name].css",
                filename: options.hashFileNames ? `[chunkhash:${ options.hashLength }].css` : "[name].css"
            })
        ]
    };

    return merge(
        base,
        options.watching ? watching : {},
        options.target === "web" ? web : node,
    );

}
