

import path from "path";

import {
    IWebpackCompiledOptions,
    IWebpackConfiguration
} from "../../interfaces";


export default function configuration(
    config: IWebpackConfiguration,
    options: IWebpackCompiledOptions
): IWebpackConfiguration{

    return {
        output: {
            chunkFilename: options.hashFileNames ? `[chunkhash:${ options.hashLength }].js` : "[name].js",
            filename: options.hashFileNames ? `[chunkhash:${ options.hashLength }].js` : "[name].js",
            hashDigest: "base64",
            path: path.join(process.cwd(), `src/${ options.platform }/dist/${ options.target }`),
            publicPath: "/static/"
        }
    };

}
