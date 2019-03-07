

import path from "path";


export default function configure(config, options){

    return {
        resolve: {
            alias: {
                src: path.join(process.cwd(), "src")
            },

            /*
             * The order of these is significant. It determinds which extension
             * will be matched when the dependency is defined without a file
             * extension in the path
             */
            extensions: [
                ".mjs",
                ".ts",
                ".tsx",
                ".js"
            ],
            modules: [
                "node_modules",
                `src/${ options.platform }/node_modules`,
                "src"
            ],
            symlinks: false
        }
    };

}
