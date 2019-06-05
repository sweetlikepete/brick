

import path from "path";

import { Configuration } from "webpack";

import { Options } from "../..";


export default function configuration(
    config: Configuration,
    options: Options
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
