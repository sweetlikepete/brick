

import AssetsPlugin from "assets-webpack-plugin";
import autoprefixer from "autoprefixer";
import babelConfig from "../babel";
import automationConfig from "../automation";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import clone from "clone";
import generateShared from "./shared";
import merge from "merge";
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
        devtool: config.production ? "none" : "source-maps",
        entry: path.join(process.cwd(), "src/web/client/index.js"),
        mode: config.production ? "production" : "development",
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
                    exclude: /\.module\.scss$/,
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                modules: false,
                                sourceMap: true
                            }
                        },
                        postCSSLoader,
                        "sass-loader"
                    ]
                },
                {
                    test: /\.module\.scss$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                localIdentName: "[local]__[hash:base64:5]",
                                minimize: true,
                                modules: true,
                                sourceMap: true
                            }
                        },
                        postCSSLoader,
                        "sass-loader",
                    ]
                }
            ])
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
