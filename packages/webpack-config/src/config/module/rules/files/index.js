

import merge from "webpack-merge";

import fileLoader from "../../../../shared/loaders/file";


export default function configure(config, options){

    return merge(config, {
        module: {
            rules: [
                // .txt and .json file extensions
                {
                    exclude: /node_modules/u,
                    test: /\.(txt|json)$/u,
                    use: [fileLoader(config, options)]
                }
            ]
        }
    });

}
