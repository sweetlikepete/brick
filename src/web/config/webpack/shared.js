

import BrotliPlugin from "brotli-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import automationConfig from "../automation";
import path from "path";
import TsConfigPathsPlugin from "awesome-typescript-loader";
import webpack from "webpack";


export default function sharedConfig(){

    const config = automationConfig();

    return {
        cache: !config.production,
        devtool: "source-maps",
        mode: "development",
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
                }
            ]
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new CompressionPlugin({
                algorithm: "gzip",
                filename: "[path].gz[query]",
                minRatio: 1,
                test: /\.*$/
            }),
            new BrotliPlugin({
                asset: "[path].br[query]",
                minRatio: 1,
                test: /\.*$/
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
