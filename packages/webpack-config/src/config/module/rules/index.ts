

import merge from "webpack-merge";
import { Configuration } from "webpack";

import files from "./files";
import fonts from "./fonts";
import html from "./html";
import images from "./images";
import scripts from "./scripts";
import styles from "./styles";

import { Options } from "../../..";


/*
 * An array of Rules which are matched to requests when modules are created.
 * These rules can modify how the module is created. They can apply loaders to
 * the module, or modify the parser.
 *
 * https://webpack.js.org/configuration/module/#modulerules
 */
export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    return merge(
        files(config, options),
        fonts(config, options),
        html(config),
        images(config, options),
        scripts(config, options),
        styles(config, options)
    );

}
