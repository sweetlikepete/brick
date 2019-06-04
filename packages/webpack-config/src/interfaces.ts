

export interface IEnvironment {
    mode?: "development" | "production";
    platform?: "desktop" | "mobile" | "web";
    target?: "client" | "server";
}

export interface IWebpackOptions {
    bundleAnalyzerPort?: number;
    hashFileNames?: boolean;
    hashLength?: number;
    staticFolder?: string;
    watch?: boolean;
}

export interface IWebpackCompiledOptions {
    bundleAnalyzerPort: number;
    hashFileNames: boolean;
    hashLength: number;
    mode: "development" | "production";
    platform: "desktop" | "mobile" | "web";
    staticFolder?: string;
    target: "client" | "server";
    watch: boolean;
}
