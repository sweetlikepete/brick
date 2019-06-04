

import { Configuration } from "webpack";

import { IWebpackCompiledOptions } from "../../interfaces";


/*
 * Providing the mode configuration option tells webpack to use its built-in
 * optimizations accordingly.
 *
 * https://webpack.js.org/concepts/mode/
 */
export default function configuration(
    config: Configuration,
    options: IWebpackCompiledOptions
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
