

import automationConfig from "../automation";
import babelConfig from "../babel";
import cleanCSSConfig from "../cleancss";
import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
import imageConfig from "../image";
import merge from "merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import path from "path";
import postCSSConfig from "../postcss";
import TsConfigPathsPlugin from "awesome-typescript-loader";
import UrlSafeHashPlugin from "webpack-urlsafehash-plugin";
import webpack from "webpack";


export default function sharedConfig(env){

    const config = automationConfig();
    const cwd = process.cwd();
    const hash = env === "client" && config.production;

    const babelLoader = {
        loader: "babel-loader",
        options: babelConfig(env)
    };

    const fileLoader = {
        loader: "file-loader",
        options: {
            name: config.production ? "[hash:20].[ext]" : "[path][name].[ext]",
            outputPath: "../client",
            publicPath: `/${ config.staticFolder }/`
        }
    };

    return {
        cache: false,
        devtool: "source-map",
        entry: path.join(cwd, `src/web/${ env }/index.js`),
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.(ico|txt|json|txt|ttf|otf|eot|woff(2))$/,
                    use: [
                        fileLoader
                    ]
                },
                {
                    test: /\.(svg|png|jpg|jpeg|gif)$/,
                    use: [
                        fileLoader,
                        {
                            loader: "image-webpack-loader",
                            options: imageConfig(env)
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
                                localIdentName: "[hash:base64:8]",
                                modules: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "clean-css-loader",
                            options: cleanCSSConfig
                        },
                        {
                            loader: "postcss-loader",
                            options: postCSSConfig()
                        },
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
            minimize: false,
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
            chunkFilename: hash ? "[chunkhash:8].js" : "[name].js",
            filename: hash ? "[chunkhash:8].js" : "[name].js",
            hashDigest: "base64",
            path: path.join(cwd, `src/web/build/${ env }`),
            publicPath: `/${ config.staticFolder }/`
        },
        plugins: [
            new UrlSafeHashPlugin(),
            new DuplicatePackageCheckerPlugin(),
            new webpack.DefinePlugin({
                "process.env.ENVIRONMENT": JSON.stringify(env)
            }),
            new MiniCssExtractPlugin({
                chunkFilename: hash ? "[chunkhash:8].css" : "[name].css",
                filename: hash ? "[chunkhash:8].css" : "[name].css"
            })
        ],
        resolve: {

            /*
             * Alias: merge.recursive({}, config.aliases, {
             *     src: path.join(cwd, "src")
             * }),
             */
            alias: merge.recursive({}, config.aliases, {
                // Use the es version only
                history: path.resolve(cwd, path.join("node_modules", "history/es")),
                // Different versions of the same package were being referenced
                "hoist-non-react-statics": path.resolve(cwd, path.join("node_modules", "hoist-non-react-statics")),
                // Use preact instead of react to save some weight
                react: path.resolve(cwd, path.join("node_modules", "preact-compat/dist/preact-compat.es.js")),
                // Use preact instead of react to save some weight
                "react-dom": path.resolve(cwd, path.join("node_modules", "preact-compat/dist/preact-compat.es.js")),
                // Use the es version only
                "react-redux": path.resolve(cwd, path.join("node_modules", "preact-redux/dist/preact-redux.esm.js")),
                // Use the es version only
                "react-router-dom": path.resolve(cwd, path.join("node_modules", "react-router-dom/es")),
                // Use preact instead of react to save some weight
                redux: path.resolve(cwd, path.join("node_modules", "redux/src")),
                // Src alias
                src: path.join(cwd, "src"),
                // Different versions of the same package were being referenced
                warning: path.resolve(cwd, path.join("node_modules", "warning"))
            }),

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
                    tsconfig: path.join(cwd, "tsconfig.json")
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
