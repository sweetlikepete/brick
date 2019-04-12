

import webpack from "webpack";


/* eslint-disable import/group-exports, @typescript-eslint/no-empty-interface */


export interface IEnvironment {
    mode?: "development" | "production";
    platform?: "desktop" | "mobile" | "web";
    target?: "client" | "server";
}

export interface IWebpackOptions {
    bundleAnalyzerPort?: number;
    hashFileNames?: boolean;
    hashLength?: number;
    watch?: boolean;
}

export interface IWebpackCompiledOptions {
    bundleAnalyzerPort: number;
    hashFileNames: boolean;
    hashLength: number;
    mode: "development" | "production";
    platform: "desktop" | "mobile" | "web";
    target: "client" | "server";
    watch: boolean;
}

export interface IWebpackConfiguration extends webpack.Configuration{}

export interface IWebpackLoader extends webpack.NewLoader{}


/* eslint-enable import/group-exports, @typescript-eslint/no-empty-interface */
