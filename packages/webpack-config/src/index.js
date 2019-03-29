

import path from "path";

import merge from "webpack-merge";

import config from "./config";


export default function configure(webpackConfig = {}, webpackOptions = {}){

    return (env) => {

        const options = merge({
            bundleAnalyzerPort: 3000,
            hashFileNames: false,
            hashLength: 8
        }, webpackOptions, {
            mode: env.mode || "development",
            platform: env.platform || "web",
            target: env.target || "client"
        });

        options.hashFileNames = options.target === "client" && options.mode === "production";

        /*
         * Output configuration is used by other configurations, so we set it up
         * first and pass it in the other configurations.
         */
        const conf = merge(config.output(webpackConfig, options), webpackConfig);

        return merge(
            config.devServer(conf, options),
            config.devtool(conf, options),
            config.entry(conf, options),
            config.externals(conf, options),
            config.mode(conf, options),
            config.module(conf, options),
            config.optimization(conf, options),
            config.plugins(conf, options),
            config.resolve(conf, options),
            config.stats(conf, options),
            config.target(conf, options),
            config.watchOptions(conf, options),
            conf
        );

    };

}
