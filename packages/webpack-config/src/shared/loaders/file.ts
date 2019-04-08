

import {
    IWebpackCompiledOptions,
    IWebpackConfiguration,
    IWebpackLoader
} from "../../interfaces";


export default function loader(
    config: IWebpackConfiguration,
    options: IWebpackCompiledOptions
): IWebpackLoader{

    /*
     * The file-loader resolves import/require() on a file into a url
     * and emits the file into the output directory.
     *
     * https://github.com/webpack-contrib/file-loader
     */
    return {
        loader: "file-loader",
        options: {
            name: options.mode === "production" ? `[hash:${ options.hashLength }].[ext]` : "[path][name].[ext]",
            outputPath: "../client",
            publicPath: config.output ? config.output.publicPath : null
        }
    };

}
