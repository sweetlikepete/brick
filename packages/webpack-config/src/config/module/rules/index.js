

import merge from "webpack-merge";

import files from "./files";
import fonts from "./fonts";
import images from "./images";
import scripts from "./scripts";
import styles from "./styles";


/*
 * An array of Rules which are matched to requests when modules are created.
 * These rules can modify how the module is created. They can apply loaders to
 * the module, or modify the parser.
 *
 * https://webpack.js.org/configuration/module/#modulerules
 */
export default function configure(config, options){

    return merge(
        files(config, options),
        fonts(config, options),
        images(config, options),
        scripts(config, options),
        styles(config, options)
    );

}
