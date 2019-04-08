

import merge from "webpack-merge";

import { IWebpackConfiguration } from "../../../../interfaces";


export default function configuration(config: IWebpackConfiguration): IWebpackConfiguration{

    return merge(config, {
        module: {
            rules: [
                // .html file extensions
                {
                    test: /\.html$/u,
                    use: ["html-loader"]
                }
            ]
        }
    });

}
