

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
                // .txt and .json file extensions
                {
                    exclude: /node_modules/u,
                    test: /\.(?:txt|json)$/u,
                    use: [fileLoader(config, options)]
                }
            ]
        }
    });

}
