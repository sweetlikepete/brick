

import merge from "webpack-merge";

import rules from "./rules";

import {
    IWebpackCompiledOptions,
    IWebpackConfiguration
} from "../../interfaces";


/*
 * These options determine how the different types of modules within a project
 * will be treated.
 *
 * https://webpack.js.org/configuration/module/
 */
export default function configuration(
    config: IWebpackConfiguration,
    options: IWebpackCompiledOptions
): IWebpackConfiguration{

    return merge(
        rules(config, options)
    );

}
