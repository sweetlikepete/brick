

import { Configuration } from "webpack";

import { IWebpackCompiledOptions } from "../../interfaces";


/*
 * The externals configuration option provides a way of excluding dependencies
 * from the output bundles. Instead, the created bundle relies on that dependency
 * to be present in the consumer's environment.
 *
 * https://webpack.js.org/configuration/externals/#externals
 */
export default function configuration(
    config: Configuration,
    options: IWebpackCompiledOptions
): Configuration{

    const index = `./${ options.target }/index.ts`;

    if(
        options.watch &&
        options.target === "client"
    ){

        return {
            entry: {
                index: [
                    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
                    index
                ]
            }
        };

    }

    return {
        entry: {
            index
        }
    };

}
