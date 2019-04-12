

import path from "path";

import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";


import start from "./start";


const app = express();


if(process.env.mode === "development"){

    const webpackConfig = require(path.join(process.cwd(), "webpack.config.js"));
    const config = webpackConfig();
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        serverSideRender: true,
        stats: config.stats
    }));

    app.use(webpackHotMiddleware(compiler));

}


export {
    app,
    start
};
