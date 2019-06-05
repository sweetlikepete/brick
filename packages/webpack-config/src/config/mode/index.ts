

import { Configuration } from "webpack";

import { Options } from "../..";


/*
 * Providing the mode configuration option tells webpack to use its built-in
 * optimizations accordingly.
 *
 * https://webpack.js.org/concepts/mode/
 */
export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    /*
     * Set common development options.
     *
     * https://webpack.js.org/concepts/mode/#mode-development
     */
    const development = "development";

    /*
     * Set common production options.
     *
     * https://webpack.js.org/concepts/mode/#mode-production
     */
    const production = "production";

    return {
        mode: options.mode === "development" ? development : production
    };

}
