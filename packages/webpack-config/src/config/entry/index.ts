

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

    const index = `./${ options.target }/index.ts`;

    if(
        options.watch &&
        options.target === "client"
    ){

        return {
            entry: {
                index
            }
        };

    }

    return {
        entry: {
            index
        }
    };

}
