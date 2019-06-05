

import merge from "webpack-merge";
import { Configuration } from "webpack";

import rules from "./rules";

import { Options } from "../..";


/*
 * These options determine how the different types of modules within a project
 * will be treated.
 *
 * https://webpack.js.org/configuration/module/
 */
export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    return merge(
        rules(config, options)
    );

}
