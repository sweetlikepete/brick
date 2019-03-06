

import merge from "webpack-merge";

import rules from "./rules";


/*
 * These options determine how the different types of modules within a project
 * will be treated.
 *
 * https://webpack.js.org/configuration/module/
 */
export default function configure(config, options){

    return merge(
        rules(config, options)
    );

}
