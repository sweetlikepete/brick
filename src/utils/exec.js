

import exec from "child_process";

import chalk from "chalk";
import through from "through2";

import logger from "./logger";


export default function run(command, label = "anonymous", detatch = false){

    return new Promise((resolve, reject) => {

        let cmd = Array.isArray(command) ? command.join(" ") : command;

        cmd = cmd.replace(/\r\n|\r|\n/gu, "").replace(/\s\s+/gu, " ");

        logger.log(label, `${ chalk.hex("#e87e00")("bash") } ${ chalk.hex("#ffc600")(cmd) }`, true);

        const subprocess = exec.exec(cmd, {
            stdio: [
                0,
                1,
                2
            ]
        }, (error, stdout, stderr) => {

            if(error){

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

                if(!detatch){
                    logger.write(label, string, first);
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

                console.log("");

            }

        });

    });

}
