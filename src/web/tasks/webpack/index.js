

import config from "../../config";
import formatMessages from "webpack-format-messages";
import fs from "fs-extra";
import generateWebpackConfig from "../../config/webpack";
import log from "fancy-log";
import path from "path";
import Task from "../../../task";
import webpack from "webpack";


const callback = (err, stats, resolve, reject) => {

    if(!err){

        const messages = formatMessages(stats);

        if(messages.errors.length > 0){

            log("Webpack failed to compile.");

            stats.toJson().errors.forEach((error) => console.error(error));

            return;

        }

        console.log(stats.toString({ colors: true }));

        log("Webpack compiled successfully!");


        if(resolve){

            resolve();

        }

    }else{

        console.error(err);

        if(reject){
            reject(err);
        }

    }

};


export default class WebpackTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.webpack";

    }

    async runner(paths, watching = false){

        const webpackConfig = generateWebpackConfig();
        const keys = Object.keys(webpackConfig);

        // This is ok because it only happens during the build
        // eslint-disable-next-line no-sync
        keys.forEach((key) => fs.ensureDirSync(path.join(process.cwd(), `src/web/build/${ key }`)));

        const configs = keys.map((key) => webpackConfig[key]);

        await new Promise((resolve, reject) => {

            const compiler = webpack(configs);

            if(watching){

                compiler.watch(config.watchOptions, (err, stats) => {

                    callback(err, stats);

                });

            }else{

                compiler.run((err, stats) => {

                    callback(err, stats, resolve, reject);

                });

            }

        });

    }

    watcher(){

        return this.runner(__filename, true);

    }

}
