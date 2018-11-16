

import AssetsPlugin from "assets-webpack-plugin";
import autoprefixer from "autoprefixer";
import automationConfig from "../automation";
import babelConfig from "../babel";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import clone from "clone";
import generateShared from "./shared";
import merge from "merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import path from "path";
import { ReactLoadablePlugin } from "react-loadable/webpack";
import webpack from "webpack";


export default function clientConfig(watching = false){

    const config = automationConfig();
    const shared = generateShared();

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

    return merge.recursive({}, clone(shared), {
        entry: path.join(process.cwd(), "src/web/client/index.js"),
        module: {
            rules: clone(shared).module.rules.concat([
                {
                    exclude: /node_modules/,
                    test: /\.js$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelConfig().client
                        }
                    ]
                },
                {
                    exclude: /node_modules/,
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: babelConfig().client
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
            ])
        },
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        output: {
            chunkFilename: config.production ? "[chunkhash].js" : "[name].js",
            filename: config.production ? "[chunkhash].js" : "[name].js",
            path: path.join(process.cwd(), "src/web/build/client"),
            publicPath: `/${ config.staticFolder }/`
        },
        plugins: shared.plugins.concat([
            new AssetsPlugin({
                filename: "src/web/build/client/webpack-assets.json",
                fullpath: true
            }),
            new MiniCssExtractPlugin({
                chunkFilename: config.production ? "[chunkhash].css" : "[name].css",
                filename: config.production ? "[chunkhash].css" : "[name].css"
            }),
            new ReactLoadablePlugin({
                filename: path.join(process.cwd(), "src/web/build/client/react-loadable-stats.json")
            }),
            new webpack.DefinePlugin({
                "process.env.ENVIRONMENT": JSON.stringify("client")
            })
        ].concat(watching ? [
            new BundleAnalyzerPlugin({
                analyzerHost: "127.0.0.1",
                analyzerMode: "server",
                analyzerPort: 30000,
                defaultSizes: "parsed",
                generateStatsFile: false,
                logLevel: "info",
                openAnalyzer: false,
                reportFilename: "report.html",
                statsFilename: "stats.json",
                statsOptions: null
            })
        ] : [])),
        stats: {
            publicPath: true
        },
        target: "web"
    });

}
