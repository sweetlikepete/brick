

import merge from "webpack-merge";
import { Configuration } from "webpack";


export default function configuration(config: Configuration): Configuration{

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
