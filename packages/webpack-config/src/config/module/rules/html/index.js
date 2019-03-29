

import merge from "webpack-merge";


export default function configure(config){

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
