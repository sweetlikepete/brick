

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
