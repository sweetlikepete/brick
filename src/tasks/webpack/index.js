

import path from "path";

import sequential from "promise-sequential";
import webpack from "webpack";

import logger from "../../utils/logger";
import { task } from "../../utils/task";


const label = "webpack";

const log = (label2) => (error, stats, configFile) => {

    if(error){

        console.error(error);

        process.exit();

    }else{

        logger.log(label, `${ label2 } ${ configFile }`);

        logger.log(label);

        logger.log(label, stats.toString({
            builtAt: false,
            colors: true,
            entrypoints: false,
            hash: false,
            modules: false,
            timings: false,
            version: false
        }));

        logger.log(label);

    }

};

const webpackTask = task(label, async (config, options) => {

    const {
        serve = false,
        watch = false
    } = options;

    const webpackPromise = (target, mode, platform) => () => new Promise((resolve) => {

        const webpackConfigFile = path.join(process.cwd(), "webpack.config.js");

        // This doesn't present any danger and is necessary in this case.
        // eslint-disable-next-line import/no-dynamic-require, security/detect-non-literal-require, global-require
        const webpackConfig = require(webpackConfigFile);
        const compiler = webpack(webpackConfig({
            mode,
            platform,
            target
        }));

        if(watch){

            compiler.watch({
                aggregateTimeout: 600,
                ignored: [
                    "node_modules",
                    `src/${ platform }/node_modules`
                ],
                poll: false
            },
            (error, stats) => {

                log("Watching")(error, stats, webpackConfigFile);

                resolve();

            });

        }else{

            compiler.run((error, stats) => {

                log("Running")(error, stats, webpackConfigFile);

                resolve();

            });

        }

    });

    const commands = [
        // Webpack("client", "production", "web", serve),
        webpackPromise("server", "development", "web")
    ];

    if(watch || serve){

        await Promise.all(commands.map((command) => command()));

    }else{

        await sequential(commands);

    }

});

export default webpackTask;
