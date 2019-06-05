

import merge from "webpack-merge";
import { Configuration } from "webpack";

import fileLoader from "../../../../shared/loaders/file";
import { Options } from "../../../..";


export default function configuration(
    config: Configuration,
    options: Options
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
