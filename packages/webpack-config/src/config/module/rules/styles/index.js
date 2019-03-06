

import autoprefixer from "autoprefixer";
import fontSmoothing from "postcss-font-smoothing";
import fontVariant from "postcss-font-variant";
import imageSet from "postcss-image-set-polyfill";
import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export default function configure(config, options){

    return merge(config, {
        module: {
            rules: [
                // .scss and .css style extensions
                {
                    test: /\\.s?css$/u,
                    use: [

                        /*
                         * This plugin extracts CSS into separate files. It creates a CSS
                         * file per JS file which contains CSS. It supports On-Demand-Loading
                         * of CSS and SourceMaps.
                         *
                         * https://github.com/webpack-contrib/mini-css-extract-plugin
                         */
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: config.output.publicPath
                            }
                        },

                        /*
                         * The css-loader interprets @import and url() like
                         * import/require() and will resolve them.
                         *
                         * https://github.com/webpack-contrib/css-loader
                         */
                        {
                            loader: "css-loader",
                            options: {
                                localIdentName: `[hash:base64:${ options.hashLength }]`,
                                modules: true,
                                sourceMap: true
                            }
                        },

                        /*
                         * A clean-css loader for webpack.
                         *
                         * clean-css is a fast and efficient CSS optimizer for Node.js platform
                         * and any modern browser.
                         *
                         * https://www.npmjs.com/package/clean-css-loader
                         */
                        {
                            loader: "clean-css-loader",
                            options: {
                                compatibility: "ie11",
                                level: {
                                    1: {
                                        specialComments: 0
                                    }
                                }
                            }
                        },

                        /*
                         * Loader for webpack to process CSS with PostCSS
                         *
                         * https://github.com/postcss/postcss-loader
                         */
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [

                                    /*
                                     * PostCSS plugin to parse CSS and add vendor prefixes to CSS
                                     * rules using values from Can I Use.
                                     *
                                     * https://github.com/postcss/autoprefixer
                                     */
                                    autoprefixer({
                                        flexbox: "no-2009"
                                    }),

                                    /*
                                     * PostCSS plugin to fallback font-smoothing property
                                     *
                                     * https://github.com/morishitter/postcss-font-smoothing
                                     */
                                    fontSmoothing,

                                    /*
                                     * PostCSS Font-Variant lets you use font-variant in CSS,
                                     * following the CSS Fonts specification.
                                     *
                                     * https://github.com/postcss/postcss-font-variant
                                     */
                                    fontVariant,

                                    /*
                                     * PostCSS plugin for polyfilling image-set CSS function.
                                     *
                                     * https://www.npmjs.com/package/postcss-image-set-polyfill
                                     */
                                    imageSet
                                ]
                            }
                        },

                        /*
                         * Loads a Sass/SCSS file and compiles it to CSS.
                         *
                         * https://github.com/webpack-contrib/sass-loader
                         */
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        }
    });

}
