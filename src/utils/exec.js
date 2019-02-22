

import exec from "child_process";

import chalk from "chalk";
import log from "fancy-log";


export default async function run(command, label = "Anonymous"){

    await new Promise((resolve, reject) => {

        let cmd = Array.isArray(command) ? command.join(" ") : command;

        cmd = cmd.replace(/\r\n|\r|\n/gu, "").replace(/\s\s+/gu, " ");

        log(`${ label }: ${ chalk.yellow("[exec]") } ${ chalk.magenta(cmd) }`);

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
                resolve(stdout);
            }

        });

        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);

    });

}
