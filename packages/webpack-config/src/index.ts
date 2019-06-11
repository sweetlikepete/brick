

import merge from "webpack-merge";
import { Configuration } from "webpack";

import config from "./config";


export type Mode = "development" | "production";

export type Platform = "desktop" | "mobile" | "web";

export type Target = "client" | "server";

export interface ConfigurationOptions {
    bundleAnalyzerPort?: number;
    hashLength?: number;
    staticFolder?: string;
    watch?: boolean;
}

export interface Environment {
    mode?: Mode;
    platform?: Platform;
    target?: Target;
    watch?: boolean;
}

export interface Options {
    bundleAnalyzerPort: number;
    hashLength: number;
    mode: Mode;
    platform: Platform;
    staticFolder: string;
    target: Target;
    watch: boolean;
}


export default function configure(
    webpackConfig: Configuration = {},
    webpackOptions: ConfigurationOptions = {}
): (environment: Environment) => Configuration{

    return (environment: Environment = {}): Configuration => {

        const optionsDefaults: Options = {
            bundleAnalyzerPort: 3001,
            hashLength: 8,
            mode: "development",
            platform: "web",
            staticFolder: "static",
            target: "client",
            watch: Boolean(process.env.watch || false)
        };

        const options: Options = Object.assign(optionsDefaults, {
            bundleAnalyzerPort: webpackOptions.bundleAnalyzerPort,
            hashLength: webpackOptions.hashLength || optionsDefaults.hashLength,
            mode: environment.mode || optionsDefaults.mode,
            platform: environment.platform || optionsDefaults.platform,
            staticFolder: webpackOptions.staticFolder || optionsDefaults.staticFolder,
            target: environment.target || optionsDefaults.target,
            // Bug in the linter
            // eslint-disable-next-line security/detect-non-literal-fs-filename
            watch: Boolean(environment.watch) || optionsDefaults.watch
        });

        // Make sure options.staticFolder doesn't have any outer slashes
        options.staticFolder = options.staticFolder.replace(/^\/+|\/+$/gu, "");

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
            config.resolve(),
            config.stats(),
            config.target(configuration, options),
            config.watchOptions(),
            configuration
        );

    };

}
