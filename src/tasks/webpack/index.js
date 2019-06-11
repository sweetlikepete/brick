

import path from "path";

import sequential from "promise-sequential";
import webpack from "webpack";
import logger from "@sweetlikepete/logger";

import {
    kill,
    spawn
} from "../../utils";
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


const log = (label1, label2) => (error, stats, configFile) => {

    const options = {
        label: label1
    };

    if(error){

        console.error(error);

        process.exit();

    }else{

        logger.log(`${ label2 } ${ configFile }`, options);

        logger.log("", options);

        logger.log(stats.toString(statsOptions), options);

        logger.log("", options);

    }

};

const webpackTask = task("webpack", async (config, options) => {

    const {
        mode = "production",
        platform = "web",
        watch = false
    } = options;

    process.chdir(path.join(config.cwd, `src/${ platform }`));

    // We'll allow this for now
    // eslint-disable-next-line no-async-promise-executor
    const webpackPromise = (target) => () => new Promise(async (resolve) => {

        const label = "webpack";
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

                await kill("webpack-dev-server");

                await spawn({
                    command: [
                        "webpack-dev-server",
                        `--mode=${ mode }`,
                        `--env.mode=${ mode }`,
                        `--env.watch=${ watch }`,
                        `--env.platform=${ platform }`,
                        `--env.target=${ target }`
                    ].join(" "),
                    label
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

                    log(label, "Watching")(error, stats, webpackConfigFile);

                    logger.log("");

                });

            }

        }else{

            compiler.run((error, stats) => {

                log(label, "Running")(error, stats, webpackConfigFile);

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
