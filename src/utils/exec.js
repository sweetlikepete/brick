

import exec from "child_process";

import chalk from "chalk";
import through from "through2";

import logger from "./logger";


export default function run(options = {}){

    const {
        command,
        filter = [],
        detatch = false,
        label = "anonymous"
    } = options;

    return new Promise((resolve, reject) => {

        let cmd = Array.isArray(command) ? command.join(" ") : command;

        cmd = cmd
        .replace(/\r\n|\r|\n/gu, "")
        .replace(/\s\s+/gu, " ")
        .replace(/^\s/gu, "");

        const bashTag = chalk.hex("#000000").bgHex("#c99c00")(" bash ");
        const bashCmd = cmd;

        if(!detatch){
            logger.log(label, `${ bashTag } ${ bashCmd }`);
        }

        const subprocess = exec.exec(cmd, {
            stdio: [
                0,
                1,
                2
            ]
        }, (error, stdout, stderr) => {

            if(error){

                if(!detatch){

                    console.log("");

                    logger.error(label, error.stack);

                }

                reject(error, stderr);

            }else{

                resolve(stdout);

            }

        });

        if(!detatch){
            process.stdin.pipe(subprocess.stdin);
        }

        let first = true;

        const piper = (std) => {

            subprocess[std].pipe(through.obj((string, encoding, done) => {

                let formattedString = string;

                (Array.isArray(filter) ? filter : [filter]).forEach((filt) => {
                    formattedString = formattedString.replace(filt, "");
                });

                if(!detatch){
                    logger.write(label, formattedString, first);
                }

                first = false;

                done();

            }));

        };

        piper("stdout");
        piper("stderr");

        subprocess.stdout.on("end", () => {

            if(!detatch){

                process.stdin.unref();

            }

        });

    });

}
