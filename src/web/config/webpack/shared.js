

import automationConfig from "../automation";
import autoprefixer from "autoprefixer";
import babelConfig from "../babel";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import path from "path";
import TsConfigPathsPlugin from "awesome-typescript-loader";
import webpack from "webpack";


export default function sharedConfig(env){

    const config = automationConfig();
    const hash = config.production && env !== "server";

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
        devtool: config.production && env !== "server" ? "none" : "source-map",
        entry: path.join(process.cwd(), `src/web/${ env }/index.js`),
        mode: config.production && env !== "server" ? "production" : "development",
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
                    exclude: /node_modules/,
                    test: /\.js$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelConfig(env)
                        }
                    ]
                },
                {
                    exclude: /node_modules/,
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelConfig(env)
                        },
                        {
                            loader: "ts-loader"
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
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        output: {
            chunkFilename: hash ? "[chunkhash].js" : "[name].js",
            filename: hash ? "[chunkhash].js" : "[name].js",
            path: path.join(process.cwd(), `src/web/build/${ env }`),
            publicPath: `/${ config.staticFolder }/`
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.DefinePlugin({
                "process.env.ENVIRONMENT": JSON.stringify(env)
            }),
            new MiniCssExtractPlugin({
                chunkFilename: hash ? "[chunkhash].css" : "[name].css",
                filename: hash ? "[chunkhash].css" : "[name].css"
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
