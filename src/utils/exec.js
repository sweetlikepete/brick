

import exec from "child_process";

import through from "through2";

import logger from "./logger";


export default function run(command, label = "anonymous", detatch = false){

    return new Promise((resolve, reject) => {

        let cmd = Array.isArray(command) ? command.join(" ") : command;

        cmd = cmd.replace(/\r\n|\r|\n/gu, "").replace(/\s\s+/gu, " ");

        logger.log([
            label,
            "exec"
        ], cmd);

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

        const piper = (std) => {

            let first = true;

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
