

import merge from "webpack-merge";

import fileLoader from "../../../../shared/loaders/file";
import {
    IWebpackCompiledOptions,
    IWebpackConfiguration
} from "../../../../interfaces";


export default function configuration(
    config: IWebpackConfiguration,
    options: IWebpackCompiledOptions
): IWebpackConfiguration{

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
