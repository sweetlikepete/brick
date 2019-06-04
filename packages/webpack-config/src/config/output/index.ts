

import path from "path";

import { Configuration } from "webpack";

import { IWebpackCompiledOptions } from "../../interfaces";


export default function configuration(
    config: Configuration,
    options: IWebpackCompiledOptions
): Configuration{

    return {
        output: {
            chunkFilename: options.hashFileNames ? `[hash:${ options.hashLength }].js` : "[name].js",
            filename: options.hashFileNames ? `[hash:${ options.hashLength }].js` : "[name].js",
            hashDigest: "base64",
            path: path.join(process.cwd(), `dist/${ options.target }`),
            publicPath: `/${ options.staticFolder }/`
        }
    };

}
