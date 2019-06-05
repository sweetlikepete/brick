

import path from "path";

import merge from "webpack-merge";
import { Configuration } from "webpack";

import babelLoader from "../../../../shared/loaders/babel";
import { Options } from "../../../..";


export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    const loader = babelLoader(config, options);

    return merge(config, {
        module: {
            rules: [
                // Modernizr.js
                {
                    test: /modernizr.js$/u,
                    use: [
                        "modernizr-loader",
                        loader
                    ]
                },
                // .mjs script extension
                {
                    test: /\.mjs$/u,

                    /*
                     * Bypasses webpack's built-in json importing, we want to
                     * match node_modules too because it'll help with tree
                     * shaking of external dependencies where possible.
                     */
                    type: "javascript/auto",
                    use: [loader]
                },
                // .js and .jsx script extensions
                {
                    exclude: /node_modules/u,
                    test: /\.jsx?$/u,
                    use: [loader]
                },
                // .ts and .tsx script extensions
                {
                    exclude: /node_modules/u,
                    test: /\.tsx?$/u,
                    use: [loader]
                }
            ]
        },
        resolve: {
            alias: {
                modernizr$: path.resolve(__dirname, "../../../../modernizr.js")
            }
        }
    });

}
