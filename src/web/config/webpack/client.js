

import AssetsPlugin from "assets-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import clone from "clone";
import generateShared from "./shared";
import merge from "merge";
import path from "path";
import { ReactLoadablePlugin } from "react-loadable/webpack";
import TerserPlugin from "terser-webpack-plugin";


export default function clientConfig(watching = false){

    const shared = generateShared("client");

    return merge.recursive({}, clone(shared), {
        module: {
            rules: clone(shared).module.rules.concat([])
        },
        optimization: {
            minimizer: clone(shared).optimization.minimizer.concat([
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false
                        }
                    }
                })
            ])
        },
        plugins: shared.plugins.concat([
            new AssetsPlugin({
                filename: "src/web/build/client/webpack-assets.json",
                fullpath: true
            }),
            new ReactLoadablePlugin({
                filename: path.join(process.cwd(), "src/web/build/client/react-loadable-stats.json")
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
        resolve: {
            alias: {
                react: "preact-compat",
                "react-dom": "preact-compat"
            }
        },
        stats: {
            publicPath: true
        },
        target: "web"
    });

}
