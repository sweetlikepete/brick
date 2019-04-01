

import path from "path";

import merge from "webpack-merge";

import config from "./config";


export default function configure(webpackConfig = {}, webpackOptions = {}){

    return (environment) => {

        const options = merge({
            bundleAnalyzerPort: 3000,
            hashFileNames: false,
            hashLength: 8
        }, webpackOptions, {
            mode: environment.mode || "development",
            platform: environment.platform || "web",
            target: environment.target || "client"
        });

        options.hashFileNames = options.target === "client" && options.mode === "production";

        /*
         * Output configuration is used by other configurations, so we set it up
         * first and pass it in the other configurations.
         */
        const configuration = merge(config.output(webpackConfig, options), webpackConfig);

        return merge(
            config.devServer(configuration, options),
            config.devtool(configuration, options),
            config.entry(configuration, options),
            config.externals(configuration, options),
            config.mode(configuration, options),
            config.module(configuration, options),
            config.optimization(configuration, options),
            config.plugins(configuration, options),
            config.resolve(configuration, options),
            config.stats(configuration, options),
            config.target(configuration, options),
            config.watchOptions(configuration, options),
            configuration
        );

    };

}
