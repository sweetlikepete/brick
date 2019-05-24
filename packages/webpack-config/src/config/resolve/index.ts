

import { IWebpackConfiguration } from "../../interfaces";


export default function configuration(): IWebpackConfiguration{

    return {
        resolve: {

            /*
             * The order of these is significant. It determinds which extension
             * will be matched when the dependency is defined without a file
             * extension in the path
             */
            extensions: [
                ".mjs",
                ".ts",
                ".tsx",
                ".js",
                ".jsx"
            ],
            modules: [
                "node_modules"
            ],
            symlinks: false
        }
    };

}
