

import path from "path";

import AssetsPlugin from "assets-webpack-plugin";

import { IWebpackConfiguration } from "../../interfaces";


export default function configuration(
    config: IWebpackConfiguration
): IWebpackConfiguration{

    const output = config.output || {};
    const folder = output.path || "dist";

    return {
        plugins: [
            new AssetsPlugin({
                filename: path.join(folder, "webpack-assets.json")
            })
        ]
    };

}
