

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
                    use: [
                        fileLoader(config, options),

                        /*
                         * Image loader module for webpack. Minifies png, jpeg, gif, svg
                         * and webp images with imagemin
                         *
                         * https://www.npmjs.com/package/image-webpack-loader
                         */
                        {
                            loader: "image-webpack-loader",
                            options: {
                                disable: options.mode !== "production",
                                gifsicle: {
                                    interlaced: false
                                },
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                optipng: {
                                    enabled: false
                                },
                                pngquant: {
                                    quality: "65-90",
                                    speed: 4
                                }
                            }
                        }
                    ]
                }
            ]
        }
    });

}
