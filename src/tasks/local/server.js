

import path from "path";

import fs from "fs-extra";
import nodemon from "nodemon";

import {
    kill,
    logger
} from "../../utils";

const label = "💻 server";


const awaitServerScript = function(){

    const intervalTime = 100;
    const maxWaitTime = 10000;
    const serverScript = path.join(process.cwd(), "src/web/dist/server/index.js");

    let waited = 0;

    return new Promise((resolve, reject) => {

        const interval = setInterval(async () => {

            const exists = await fs.exists(serverScript);

            if(exists){

                clearInterval(interval);

                resolve(serverScript);

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

const startNodemonServer = function(script, environment){

    return new Promise(() => {

        nodemon({
            env: environment,
            ext: "js json",
            script,
            stdout: false
        });

        nodemon.on("start", () => {

            logger.log(`${ label } started`, script);

        }).on("quit", () => {

            logger.log(`${ label } quit`);

            process.exit();

        }).on("restart", (files) => {

            if(files.length === 1){

                logger.log(`${ label } restarted`, files[0], "#d3d3d3");

            }else{

                files.forEach((file) => {
                    logger.log(`${ label } restarted`, file, "#d3d3d3");
                });

            }

        })
        .on("readable", function readable(){

            const output = (color) => (data) => {

                const string = data.toString();

                if(string){
                    logger.log(`${ label }`, string.replace(/(?:\r\n|\r|\n)/gu, ""), color);
                }

            };

            /* eslint-disable no-invalid-this */

            this.stdout.on("data", output("#ffffff"));
            this.stderr.on("data", output("#ff0000"));

            /* eslint-enable no-invalid-this */

        });

    });

};

const server = async function(config){

    const script = await awaitServerScript();

    await kill(script);

    await startNodemonServer(script, config.local.env);

};


export default server;
