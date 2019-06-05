

import nodeExternals from "webpack-node-externals";
import { Configuration } from "webpack";

import { Options } from "../..";


/*
 * The externals configuration option provides a way of excluding dependencies
 * from the output bundles. Instead, the created bundle relies on that dependency
 * to be present in the consumer's environment.
 *
 * https://webpack.js.org/configuration/externals/#externals
 */
export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    const server = {
        externals: [

            /*
             * When bundling with Webpack for the backend - you usually don't want
             * to bundle its node_modules dependencies. This library creates an
             * externals function that ignores node_modules when bundling in Webpack.
             *
             * https://www.npmjs.com/package/webpack-node-externals
             */
            nodeExternals({

                /*
                 * An array for the externals to whitelist, so they will be included
                 * in the bundle. Can accept exact strings ('module_name'), regex
                 * patterns (/^module_name/), or a function that accepts the module
                 * name and returns whether it should be included. Important - if
                 * you have set aliases in your webpack config with the exact same
                 * names as modules in node_modules, you need to whitelist them
                 * so Webpack will know they should be bundled.
                 */
                whitelist: [
                    /^babel-plugin-universal-import/u,
                    /^modernizr/u
                ]
            })
        ]
    };

    return options.target === "server" ? server : {};

}
