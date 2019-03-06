

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";


export default function configure(config, options){

    return {
        plugins: [
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
        ]
    };

}
