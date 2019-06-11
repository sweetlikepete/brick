

import path from "path";

import fs from "fs-extra";
import nodemon from "nodemon";
import logger from "@sweetlikepete/logger";

import { kill } from "../../utils";

const label = "server";


const awaitServerScript = function(config){

    process.chdir(path.join(config.cwd, "src/web"));

    const intervalTime = 100;
    const maxWaitTime = 10000;
    const serverScript = "dist/server/index.js";

    let waited = 0;

    return new Promise((resolve, reject) => {

        const interval = setInterval(async () => {

            const exists = await fs.exists(serverScript);

            if(exists){

                clearInterval(interval);

                const delay = 100;

                /*
                 * Sometimes nodemon doesn't pick up the script so we're hacking
                 * a little delay to try to fix that.
                 */
                setTimeout(() => {

                    resolve(serverScript);

                }, delay);

            }else{

                if(waited > maxWaitTime){

                    clearInterval(interval);

                    reject(new Error(`Server script was not found at ${ serverScript }`));

                }

                waited += intervalTime;

            }

        }, intervalTime);

    });

};

// eslint-disable-next-line max-lines-per-function
const startNodemonServer = function(script, environment){

    // eslint-disable-next-line max-lines-per-function
    return new Promise(() => {

        nodemon({
            env: environment,
            ext: "js json",
            script,
            stdout: false,
            watch: [
                script
            ]
        });

        nodemon.on("start", () => {

            logger.log(`Started ${ script }\n`, { label });

            logger.table(
                "server",
                ["process.env", "value"],
                Object.keys(environment).map((key) => [key, environment[key]]),
                {
                    align: ["r", "l"]
                }
            );

            logger.log("", { label });

        }).on("quit", () => {

            logger.log(`Quit ${ script }`, { label });

            process.exit();

        }).on("restart", (files) => {

            if(files && files.length === 1){

                logger.log(`Restarted ${ files[0] }`, {
                    color: "#d3d3d3",
                    label
                });

            }else if(files){

                files.forEach((file) => {

                    logger.log(`Restarted ${ file }`, {
                        color: "#d3d3d3",
                        label
                    });

                });

            }else{

                logger.log("Restarted", {
                    color: "#d3d3d3",
                    label
                });

            }

        })
        .on("readable", function readable(){

            const output = (color) => (data) => {

                const string = data.toString();

                try{

                    const log = JSON.parse(string);

                    if(log.message){

                        if(
                            log.level === "warn" ||
                            log.level === "error"
                        ){

                            logger.error(log.message, {
                                color: log.level === "warn" ? "#ff5400" : "#ff0000",
                                label
                            });

                        }else{

                            logger.log(log.message, {
                                color,
                                label
                            });

                        }

                        return;

                    }

                }catch(error){}

                if(string){

                    logger.log(string, {
                        color,
                        label
                    });

                }

            };

            /* eslint-disable no-invalid-this */

            this.stdout.on("data", output("#ffffff"));
            this.stderr.on("data", output("#ff0000"));

            /* eslint-enable no-invalid-this */

        });

    });

};

const server = async function(config, options){

    const script = await awaitServerScript(config);

    await kill(script);

    await startNodemonServer(script, {
        FIRESTORE_EMULATOR_HOST: `${ config.firestore.host }:${ config.firestore.port }`,
        local: true,
        mode: options.mode,
        PORT: config.nodemon.port,
        watch: Boolean(options.watch)
    });

};


export default server;
