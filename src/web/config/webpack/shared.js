

import HardSourceWebpackPlugin from "hard-source-webpack-plugin";
import nodeObjectHash from "node-object-hash";
import path from "path";
import TsConfigPathsPlugin from "awesome-typescript-loader";
import webpack from "webpack";


export default function sharedConfig(){

    const production = global.AUTOMATION.production;

    return {
        cache: !production,
        devtool: production ? "none" : "source-maps",
        mode: production ? "production" : "development",
        module: {
            rules: [
                {
                    test: /\.(svg|png|jpg|jpeg|gif|ico|txt|json)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: production ? "[hash:20].[ext]" : "[path][name].[ext]",
                                outputPath: "../client",
                                publicPath: "/💩/"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new HardSourceWebpackPlugin({
                cacheDirectory: path.join(process.cwd(), "node_modules/.cache/hard-source/[confighash]"),
                cachePrune: {
                    // 2 Days
                    // eslint-disable-next-line no-magic-numbers
                    maxAge: 2 * 24 * 60 * 60 * 1000,
                    // 50 Megabytes
                    // eslint-disable-next-line no-magic-numbers
                    sizeThreshold: 50 * 1024 * 1024
                },
                configHash: (webpackConfig) => nodeObjectHash({ sort: false }).hash(webpackConfig),
                environmentHash: {
                    directories: [],
                    files: [
                        "package-lock.json",
                        "yarn.lock"
                    ],
                    root: process.cwd()
                },
                info: {
                    level: "debug",
                    mode: "none"
                }
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
