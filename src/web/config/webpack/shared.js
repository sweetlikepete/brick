

import automationConfig from "../automation";
import autoprefixer from "autoprefixer";
import BrotliPlugin from "brotli-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import path from "path";
import TsConfigPathsPlugin from "awesome-typescript-loader";
import webpack from "webpack";


export default function sharedConfig(){

    const config = automationConfig();

    const postCSSLoader = {
        loader: "postcss-loader",
        options: {
            ident: "postcss",
            plugins: () => [
                autoprefixer({ browsers: config.browsers })
            ],
            sourceMap: true
        }
    };

    return {
        cache: !config.production,
        devtool: config.production ? "none" : "source-maps",
        mode: config.production ? "production" : "development",
        module: {
            rules: [
                {
                    test: /\.(svg|png|jpg|jpeg|gif|ico|txt|json|txt)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: config.production ? "[hash:20].[ext]" : "[path][name].[ext]",
                                outputPath: "../client",
                                publicPath: `/${ config.staticFolder }/`
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: `/${ config.staticFolder }/`
                            }
                        },
                        {
                            loader: "css-loader",
                            options: {
                                localIdentName: "[hash:8]",
                                minimize: true,
                                modules: true,
                                sourceMap: true
                            }
                        },
                        postCSSLoader,
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new MiniCssExtractPlugin({
                chunkFilename: config.production ? "[chunkhash].css" : "[name].css",
                filename: config.production ? "[chunkhash].css" : "[name].css",
                path: path.join(process.cwd(), "src/web/build/client")
            }),
            new CompressionPlugin({
                algorithm: "gzip",
                filename: "[path].gz[query]",
                minRatio: 1,
                test: /\.*$/,
                threshold: 0
            }),
            new BrotliPlugin({
                asset: "[path].br[query]",
                minRatio: 1,
                test: /\.*$/,
                threshold: 0
            })
        ],
        resolve: {
            alias: {
                src: path.join(process.cwd(), "src")
            },

            /*
             * The order of these is significant. It determinds which extension
             * will be matched when the dependency is defined without a file
             * extension in the path
             */
            extensions: [
                ".ts",
                ".tsx",
                ".js"
            ],
            modules: [
                "node_modules",
                "src"
            ],
            plugins: [
                new TsConfigPathsPlugin.TsConfigPathsPlugin({
                    compiler: "typescript",
                    tsconfig: path.join(process.cwd(), "tsconfig.json")
                })
            ],
            symlinks: false
        },
        watchOptions: {
            aggregateTimeout: 300,
            ignored: [
                "**/pages/**/*.html",
                "**/pages/**/*.svg",
                "**/pages/**/*.scss"
            ]
        }
    };

}
