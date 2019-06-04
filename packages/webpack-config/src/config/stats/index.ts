

import { Configuration } from "webpack";


/*
 * The stats option lets you precisely control what bundle information gets
 * displayed. This can be a nice middle ground if you don't want to use quiet or
 * noInfo because you want some bundle information, but not all of it.
 *
 * https://webpack.js.org/configuration/stats/
 */
export default function configuration(): Configuration{

    return {
        stats: {
            builtAt: false,
            colors: true,
            entrypoints: false,
            hash: false,
            modules: false,
            timings: false,
            version: false
        }
    };

}
