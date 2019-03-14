

import path from "path";

import fs from "fs-extra";
import nodemon from "nodemon";

import logger from "../../utils/logger";


const label = "server";

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

const startNodemonServer = function(script){

    return new Promise(() => {

        nodemon({
            ext: "js json",
            script,
            stdout: false
        });

        nodemon.on("start", () => {

            logger.log([label, "started"], script);

        }).on("quit", () => {

            logger.log([label, "quit"]);

            process.exit();

        }).on("restart", (files) => {

            if(files.length === 1){

                logger.log([label, "restarted"], files[0], "gray");

            }else{

                files.forEach((file) => {
                    logger.log([label, "restarted"], file, "gray");
                });

            }

        })
        .on("readable", function readable(){

            const output = (color) => (data) => {

                const string = data.toString();

                if(string){
                    logger.log(label, string.replace(/(?:\r\n|\r|\n)/gu, ""), color);
                }

            };

            /* eslint-disable no-invalid-this */

            this.stdout.on("data", output("gray"));
            this.stderr.on("data", output("red"));

            /* eslint-enable no-invalid-this */

        });

    });

};

const localServerTask = async function(){

    const script = await awaitServerScript();

    await startNodemonServer(script);

};


export default localServerTask;
