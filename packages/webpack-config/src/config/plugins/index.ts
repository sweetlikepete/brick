

import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration } from "webpack";


import client from "./client";
import server from "./server";

import { Options } from "../..";


export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    const hash =
        options.mode !== "development" ||
        options.watch !== true;

    const base: Configuration = {
        plugins: [
            // Set NODE_ENV based on the provided Webpack environment.
            new webpack.DefinePlugin({
                "process.env.mode": JSON.stringify(options.mode),
                "process.env.target": JSON.stringify(options.target),
                // Bug in the linter
                // eslint-disable-next-line security/detect-non-literal-fs-filename
                "process.env.watch": JSON.stringify(options.watch)
            }),
            new DuplicatePackageCheckerPlugin(),
            new MiniCssExtractPlugin({
                chunkFilename: hash ? `[chunkhash:${ options.hashLength }].css` : "[id].css",
                filename: hash ? `[chunkhash:${ options.hashLength }].css` : "[name].css"
            })
        ]
    };

    return merge(
        base,
        options.target === "client" ? client(config, options) : server()
    );

}
