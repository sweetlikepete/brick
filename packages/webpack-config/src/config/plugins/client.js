

import path from "path";

import AssetsPlugin from "assets-webpack-plugin";


export default function configure(config){

    return {
        plugins: [
            new AssetsPlugin({
                filename: path.join(config.output.path, "webpack-assets.json"),
                fullpath: true
            })
        ]
    };

}
