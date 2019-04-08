

import merge from "webpack-merge";

import config from "./config";
import {
    IEnvironment,
    IWebpackOptions,
    IWebpackConfiguration
} from "./interfaces";


const configure = function(
    webpackConfig: IWebpackConfiguration = {},
    webpackOptions: IWebpackOptions = {}
): (environment: IEnvironment) => IWebpackConfiguration{

    return (environment: IEnvironment = {}) => {

        const webpackOptionsDefaults = {
            bundleAnalyzerPort: 3000,
            hashFileNames: false,
            hashLength: 8,
            watching: false
        };

        const options = {
            bundleAnalyzerPort: webpackOptions.bundleAnalyzerPort || webpackOptionsDefaults.bundleAnalyzerPort,
            hashFileNames: webpackOptions.hashFileNames || webpackOptionsDefaults.hashFileNames,
            hashLength: webpackOptions.hashLength || webpackOptionsDefaults.hashLength,
            mode: environment.mode || "development",
            platform: environment.platform || "web",
            target: environment.target || "client",
            watching: webpackOptions.watching || webpackOptionsDefaults.watching
        };

        options.hashFileNames = options.target === "client" && options.mode === "production";

        /*
         * Output configuration is used by other configurations, so we set it up
         * first and pass it in the other configurations.
         */
        const configuration = merge(config.output(webpackConfig, options), webpackConfig);

        return merge(
            config.devtool(configuration, options),
            config.entry(configuration, options),
            config.externals(configuration, options),
            config.mode(configuration, options),
            config.module(configuration, options),
            config.optimization(configuration, options),
            config.plugins(configuration, options),
            config.resolve(configuration, options),
            config.stats(),
            config.target(configuration, options),
            config.watchOptions(configuration, options),
            configuration
        );

    };

};


export default configure;
