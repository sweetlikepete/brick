

import merge from "webpack-merge";
import { Configuration } from "webpack";

import fileLoader from "../../../../shared/loaders/file";
import { IWebpackCompiledOptions } from "../../../../interfaces";


export default function configuration(
    config: Configuration,
    options: IWebpackCompiledOptions
): Configuration{

    return merge(config, {
        module: {
            rules: [
                // .ttf .otf .eot .woff and .woff2 font extensions
                {
                    test: /\.(?:ttf|otf|eot|woff(?:2))$/u,
                    use: [fileLoader(config, options)]
                }
            ]
        }
    });

}
