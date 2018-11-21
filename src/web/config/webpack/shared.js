

import automationConfig from "../automation";
import autoprefixer from "autoprefixer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import path from "path";
import TsConfigPathsPlugin from "awesome-typescript-loader";
import webpack from "webpack";


export default function sharedConfig(env){

    const config = automationConfig();
    const hash = config.production && env === "client";

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

    const babelLoader = {
        loader: "babel-loader",
        options: {
            babelrc: false,
            comments: env === "client",
            plugins: [
                "react-loadable/babel",
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties"
            ],
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: env === "client" ? false : "auto",
                        targets: {
                            esmodules: true
                        }
                    }
                ],
                "@babel/preset-react"
            ]
        }
    };

    return {
        cache: !config.production,
        devtool: "source-map",
        entry: path.join(process.cwd(), `src/web/${ env }/index.js`),
        mode: "production",
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
                    test: /\.mjs$/,
                    type: "javascript/auto",
                    use: [
                        babelLoader
                    ]
                },
                {
                    exclude: /node_modules/,
                    test: /\.m?js$/,
                    use: [
                        babelLoader
                    ]
                },
                {
                    exclude: /node_modules/,
                    test: /\.tsx?$/,
                    use: [
                        babelLoader,
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
            concatenateModules: true,
            flagIncludedChunks: true,
            mangleWasmImports: true,
            mergeDuplicateChunks: true,
            minimize: Boolean(hash),
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ],
            moduleIds: config.production ? "hashed" : "named",
            nodeEnv: "production",
            occurrenceOrder: true,
            providedExports: true,
            removeAvailableModules: true,
            removeEmptyChunks: true,
            sideEffects: true,
            splitChunks: {
                automaticNameDelimiter: "~",
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    vendors: {
                        name: "vendor",
                        priority: -10,
                        test: /[\\/]node_modules[\\/]/
                    }
                },
                chunks: "async",
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                maxSize: 0,
                minChunks: 1,
                minSize: 30000,
                name: true

            },
            usedExports: true
        },
        output: {
            chunkFilename: hash ? "[chunkhash].js" : "[name].js",
            filename: hash ? "[chunkhash].js" : "[name].js",
            path: path.join(process.cwd(), `src/web/build/${ env }`),
            publicPath: `/${ config.staticFolder }/`
        },
        plugins: [
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
                react: "preact-compat",
                "react-dom": "preact-compat",
                src: path.join(process.cwd(), "src")
            },

            /*
             * The order of these is significant. It determinds which extension
             * will be matched when the dependency is defined without a file
             * extension in the path
             */
            extensions: [
                ".mjs",
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
