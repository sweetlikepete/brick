

import path from "path";

import { Configuration } from "webpack";

import { Options } from "../..";


export default function configuration(
    config: Configuration,
    options: Options
): Configuration{

    const hash =
        options.mode !== "development" ||
        options.watch !== true;

    return {
        output: {
            chunkFilename: hash ? `[hash:${ options.hashLength }].js` : "[id].js",
            filename: hash ? `[hash:${ options.hashLength }].js` : "[name].js",
            path: path.join(process.cwd(), `dist/${ options.target }`),
            publicPath: `/${ options.staticFolder }/`
        }
    };

}
