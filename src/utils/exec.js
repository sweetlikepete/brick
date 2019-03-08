

import exec from "child_process";

import logger from "./logger";


export default async function run(command, label = "anonymous"){

    await new Promise((resolve, reject) => {

        let cmd = Array.isArray(command) ? command.join(" ") : command;

        cmd = cmd.replace(/\r\n|\r|\n/gu, "").replace(/\s\s+/gu, " ");

        logger.log([
            label,
            "exec"
        ], cmd);

        console.log("");

        const proc = exec.exec(cmd, {
            stdio: [
                0,
                1,
                2
            ]
        }, (error, stdout, stderr) => {

            if(error){

                reject(error, stderr);

            }else{

                console.log("");

                resolve(stdout);

            }

        });

        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);

    });

}
