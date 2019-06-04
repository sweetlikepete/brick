

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
                // .ico favicon extension
                {
                    test: /\.ico$/u,
                    use: [fileLoader(config, options)]
                },
                // .svg .png .jpg .jpeg .gif and .webp image extensions
                {
                    test: /\.(?:svg|png|jpg|jpeg|gif|webp)$/u,

                    /*
                     * We don't use an optimizer like image-webpack-loader because
                     * we optimize images manually using brick optimize
                     */
                    use: [fileLoader(config, options)]
                }
            ]
        }
    });

}
