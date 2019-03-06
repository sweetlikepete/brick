

import merge from "webpack-merge";

import fileLoader from "../../../../shared/loaders/file";


export default function configure(config, options){

    return merge(config, {
        module: {
            rules: [
                // .txt and .json file extensions
                {
                    test: /\\.(txt|json)$/u,
                    use: [fileLoader(config, options)]
                }
            ]
        }
    });

}
