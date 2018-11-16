

import AssetsPlugin from "assets-webpack-plugin";
import automationConfig from "../automation";
import babelConfig from "../babel";
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
