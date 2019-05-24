

import path from "path";

import AssetsPlugin from "assets-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import webpack from "webpack";

import {
    IWebpackConfiguration,
    IWebpackCompiledOptions
} from "../../interfaces";


export default function configuration(
    config: IWebpackConfiguration,
    options: IWebpackCompiledOptions
): IWebpackConfiguration{

    const output = config.output || {};
    const folder = output.path ? path.relative(process.cwd(), output.path) : "dist";

    return {
        plugins: [
            new AssetsPlugin({
                filename: "webpack-assets.json",
                path: folder
            })
        ].concat(options.watch ? [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new BundleAnalyzerPlugin({
                analyzerHost: "127.0.0.1",
                analyzerMode: "server",
                analyzerPort: options.bundleAnalyzerPort,
                defaultSizes: "parsed",
                generateStatsFile: false,
                logLevel: "info",
                openAnalyzer: false,
                reportFilename: "report.html",
                statsFilename: "stats.json",
                statsOptions: null
            })
        ] : [])
    };

}
