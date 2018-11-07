

import chalk from "chalk";
import exec from "child_process";
import log from "fancy-log";


export default async function run(command){

    await new Promise((resolve, reject) => {

        let cmd = Array.isArray(command) ? command.join(" ") : command;

        cmd = cmd.replace(/(?:\r\n|\r|\n)/g, "").replace(/\s\s+/g, " ");

        log(`${ chalk.yellow("[exec]") } ${ chalk.magenta(cmd) }`);

        const proc = exec.exec(cmd, {
            stdio: [0, 1, 2]
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
