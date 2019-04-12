

import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import client from "./client";
import server from "./server";

import {
    IWebpackCompiledOptions,
    IWebpackConfiguration
} from "../../interfaces";


export default function configuration(
    config: IWebpackConfiguration,
    options: IWebpackCompiledOptions
): IWebpackConfiguration{

    const base = {
        plugins: [
            // Set NODE_ENV based on the provided Webpack environment.
            new webpack.DefinePlugin({
                "process.env.mode": JSON.stringify(options.mode),
                "process.env.target": JSON.stringify(options.target),
                "process.env.watch": options.watch
            }),
            new DuplicatePackageCheckerPlugin(),
            new MiniCssExtractPlugin({
                chunkFilename: options.hashFileNames ? `[chunkhash:${ options.hashLength }].css` : "[id].css",
                filename: options.hashFileNames ? `[chunkhash:${ options.hashLength }].css` : "[name].css"
            })
        ]
    };

    return merge(
        base,
        options.target === "client" ? client(config, options) : server()
    );

}
