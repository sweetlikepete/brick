

import merge from "webpack-merge";

import config from "./config";


export default function configure(webpackConfig, webpackOptions){

    const options = merge({
        bundleAnalyzerPort: 3000,
        hashFileNames: false,
        hashLength: 8,
        mode: "production",
        platform: "web",
        target: "web"
    }, webpackOptions);

    options.hashFileNames = options.target === "web" && options.mode === "production";

    /*
     * Output configuration is used in by other configurations, so we set it up
     * first and pass it in the other configurations.
     */
    const conf = merge(config.output(webpackConfig, options), webpackConfig);

    return merge(
        config.devtool(conf, options),
        config.externals(conf, options),
        config.mode(conf, options),
        config.module(conf, options),
        config.optimization(conf, options),
        config.plugins(conf, options),
        config.resolve(conf, options),
        config.target(conf, options),
        config.watchOptions(conf, options),
        conf
    );

}
