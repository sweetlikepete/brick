

import path from "path";

import AssetsPlugin from "assets-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
import merge from "merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import nodeExternals from "webpack-node-externals";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import { ReactLoadablePlugin } from "react-loadable/webpack";
import TerserPlugin from "terser-webpack-plugin";
import TsConfigPathsPlugin from "awesome-typescript-loader";
import UrlSafeHashPlugin from "webpack-urlsafehash-plugin";
import webpack from "webpack";

import loaders from "./loaders";


export default function sharedConfig(env, options){

    const cwd = process.cwd();

    const hash = env === "client" && options.production;

    return {
        cache: false,
        devtool: "source-map",
        entry: path.join(cwd, `src/web/${ env }/index.js`),
        externals: env === "server" ? [
            nodeExternals({
                whitelist: [/^babel-plugin-universal-import/u]
            })
        ] : [],
        mode: "production",
        module: {
            rules: [
                {
                    test: /\\.(ico|txt|json|ttf|otf|eot|woff(2))$/u,
                    use: [loaders.file(env, options)]
                },
                {
                    test: /\\.(svg|png|jpg|jpeg|gif)$/u,
                    use: [
                        loaders.file(env, options),
                        loaders.image(env, options)
                    ]
                },
                {
                    test: /\\.mjs$/u,
                    type: "javascript/auto",
                    use: [loaders.babel(env, options)]
                },
                {
                    exclude: /node_modules/u,
                    test: /\\.m?js$/u,
                    use: [loaders.babel(env, options)]
                },
                {
                    exclude: /node_modules/u,
                    test: /\\.tsx?$/u,
                    use: [loaders.babel(env, options)]
                },
                {
                    test: /\\.scss$/u,
                    use: [
                        loaders.extractcss(env, options),
                        loaders.css(env, options),
                        loaders.cleancss(env, options),
                        loaders.postcss(env, options),
                        loaders.sass(env, options)
                    ]
                }
            ]
        },
        optimization: {
            concatenateModules: true,
            flagIncludedChunks: true,
            mangleWasmImports: true,
            mergeDuplicateChunks: true,
            minimize: options.production,
            minimizer: [new OptimizeCSSAssetsPlugin({})].concat(env === "client" ? [
                new TerserPlugin({
                    terserOptions: {
                        mangle: true,
                        output: {
                            comments: false
                        }
                    }
                })
            ] : []),
            moduleIds: options.production ? "hashed" : "named",
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
                        test: /[/\\]node_modules[/\\]/u
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
            publicPath: `/${ options.staticFolder }/`
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
        ].concat(env === "client" ? [
            new AssetsPlugin({
                filename: "src/web/build/client/webpack-assets.json",
                fullpath: true
            }),
            new ReactLoadablePlugin({
                filename: path.join(process.cwd(), "src/web/build/client/react-loadable-stats.json")
            })
        ].concat(options.watching ? [
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
        ] : []) : [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            }),
            new webpack.BannerPlugin({
                banner: "require(\"source-map-support\").install();",
                entryOnly: false,
                raw: true,
                test: /\\.js$/u
            })
        ]),
        resolve: {

            /*
             * Alias: merge.recursive({}, options.aliases, {
             *     src: path.join(cwd, "src")
             * }),
             */
            alias: merge.recursive({}, options.aliases, {
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
                    tsconfig: path.join(cwd, "tsoptions.json")
                })
            ],
            symlinks: false
        },
        target: env === "client" ? "web" : "none",
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
