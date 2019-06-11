

import path from "path";

import { Configuration } from "webpack";

import { Options } from "../..";


/*
 * Chooses a style of source mapping to enhance the debugging process. These
 * values can affect build and rebuild speed dramatically.
 *
 * https://webpack.js.org/configuration/devtool/
 */
export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    const client = {
        devServer: {
            contentBase: path.join(process.cwd(), `dist/${ options.target }`),
            hot: true,
            port: 9000,
            publicPath: "/",
            stats: {
                builtAt: false,
                colors: true,
                entrypoints: false,
                hash: false,
                modules: false,
                timings: false,
                version: false
            },
            watchOptions: {
                poll: true
            }
        }
    };

    return options.target === "client" ? client : {};

}
