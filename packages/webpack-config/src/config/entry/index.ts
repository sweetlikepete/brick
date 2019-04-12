

import {
    IWebpackCompiledOptions,
    IWebpackConfiguration
} from "../../interfaces";


/*
 * The externals configuration option provides a way of excluding dependencies
 * from the output bundles. Instead, the created bundle relies on that dependency
 * to be present in the consumer's environment.
 *
 * https://webpack.js.org/configuration/externals/#externals
 */
export default function configuration(
    config: IWebpackConfiguration,
    options: IWebpackCompiledOptions
): IWebpackConfiguration{

    const index = `./${ options.target }/index.ts`;

    if(
        options.mode === "development" &&
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
