

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
