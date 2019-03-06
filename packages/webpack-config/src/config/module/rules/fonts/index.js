

import merge from "webpack-merge";

import fileLoader from "../../../../shared/loaders/file";


export default function configure(config, options){

    return merge(config, {
        module: {
            rules: [
                // .ttf .otf .eot .woff and .woff2 font extensions
                {
                    test: /\.(ttf|otf|eot|woff(2))$/u,
                    use: [fileLoader(config, options)]
                }
            ]
        }
    });

}
