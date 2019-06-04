

import merge from "webpack-merge";
import { Configuration } from "webpack";

import config from "./config";
import {
    IEnvironment,
    IWebpackOptions
} from "./interfaces";


const configure = function(
    webpackConfig: Configuration = {},
    webpackOptions: IWebpackOptions = {}
): (environment: IEnvironment) => Configuration{

    return (environment: IEnvironment = {}): Configuration => {

        const webpackOptionsDefaults = {
            bundleAnalyzerPort: 3001,
            hashFileNames: false,
            hashLength: 8,
            staticFolder: "static",
            watch: Boolean(process.env.watch || false)
        };

        const options = {
            bundleAnalyzerPort: webpackOptions.bundleAnalyzerPort || webpackOptionsDefaults.bundleAnalyzerPort,
            hashFileNames: webpackOptions.hashFileNames || webpackOptionsDefaults.hashFileNames,
            hashLength: webpackOptions.hashLength || webpackOptionsDefaults.hashLength,
            mode: environment.mode || "development",
            platform: environment.platform || "web",
            staticFolder: webpackOptions.staticFolder || webpackOptionsDefaults.staticFolder,
            target: environment.target || "client",
            watch: webpackOptions.watch || webpackOptionsDefaults.watch
        };

        // Make sure options.staticFolder doesn't have any outer slashes
        options.staticFolder = options.staticFolder.replace(/^\/+|\/+$/gu, "");

        options.hashFileNames =

            /*
             * Hashing the files breaks HMR of css resources for some reason, so we
             * aren't going to hash them while watching because we HMR while watching.
             */
            !options.watch &&

            /*
             * It doesn't make sense to hash filenames on the server since cache
             * isn't an issue there and it'll make debugging easier to leave it alone
             */
            options.target === "client" &&

            /*
             * We shouldn't hash if we aren't in production mode because it'll make
             * local debugging easier.
             */
            options.mode === "production";

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
            config.resolve(),
            config.stats(),
            config.target(configuration, options),
            config.watchOptions(),
            configuration
        );

    };

};


export default configure;
