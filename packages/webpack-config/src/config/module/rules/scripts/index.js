

import merge from "webpack-merge";

import babelLoader from "../../../../shared/loaders/babel";
import fileLoader from "../../../../shared/loaders/file";


export default function configure(config, options){

    const loader = babelLoader(config, options);

    return merge(config, {
        module: {
            rules: [
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
                    test: /\.ts$/u,
                    use: [fileLoader(config, options)]
                }
            ]
        }
    });

}
