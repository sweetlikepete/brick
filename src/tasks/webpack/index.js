

import path from "path";

import sequential from "promise-sequential";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import logger from "@sweetlikepete/logger";

import { task } from "../../utils/task";


const statsOptions = {
    builtAt: false,
    colors: true,
    entrypoints: false,
    hash: false,
    modules: false,
    timings: false,
    version: false
};


const log = (target, label2) => (error, stats, configFile) => {

    const label = `webpack ${ target[0].toUpperCase() }`;

    if(error){

        console.error(error);

        process.exit();

    }else{

        logger.log(`${ label2 } ${ configFile }`, { label });

        logger.log("", { label });

        logger.log(stats.toString(statsOptions), { label });

        logger.log("", { label });

    }

};


const webpackTask = task("webpack", async (config, options) => {

    const {
        mode = "production",
        platform = "web",
        watch = false
    } = options;

    process.chdir(path.join(config.cwd, `src/${ platform }`));

    const webpackPromise = (target) => () => new Promise((resolve) => {

        const webpackConfigFile = path.join(process.cwd(), "webpack.config.js");

        // This doesn't present any danger and is necessary in this case.
        // eslint-disable-next-line import/no-dynamic-require, security/detect-non-literal-require, global-require
        const webpackConfig = require(webpackConfigFile)({
            mode,
            platform,
            target,
            watch
        });

        const compiler = webpack(webpackConfig);

        if(watch){

            if(webpackConfig.devServer){

                const developmentServerConfig = {
                    ...webpackConfig.devServer,
                    hot: true,
                    port: 9000,
                    stats: statsOptions
                };

                const developmentServer = new WebpackDevServer(compiler, developmentServerConfig);

                developmentServer.listen(developmentServerConfig.port, "127.0.0.1", () => {
                    console.log(`Starting server on http://localhost:${ developmentServerConfig.port }`);
                });

            }else{

                compiler.watch({
                    aggregateTimeout: 600,
                    ignored: [
                        "node_modules"
                    ],
                    poll: false
                },
                (error, stats) => {

                    log(target, "Watching")(error, stats, webpackConfigFile);

                    resolve();

                });

            }

        }else{

            compiler.run((error, stats) => {

                log(target, "Running")(error, stats, webpackConfigFile);

                resolve();

            });

        }

    });

    if(watch){

        await Promise.all([
            webpackPromise("server"),
            webpackPromise("client")
        ].map((command) => command()));

    }else{

        await sequential([
            webpackPromise("client"),
            webpackPromise("server")
        ]);

        process.chdir(config.cwd);

    }

});

export default webpackTask;
