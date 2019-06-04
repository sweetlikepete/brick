

import merge from "webpack-merge";
import { Configuration } from "webpack";

import rules from "./rules";

import { IWebpackCompiledOptions } from "../../interfaces";


/*
 * These options determine how the different types of modules within a project
 * will be treated.
 *
 * https://webpack.js.org/configuration/module/
 */
export default function configuration(
    config: Configuration,
    options: IWebpackCompiledOptions
): Configuration{

    return merge(
        rules(config, options)
    );

}
