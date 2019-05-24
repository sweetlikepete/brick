

import childProcess from "child_process";

import through from "through2";
import logger from "@sweetlikepete/logger";

// Doesn't work without require
// eslint-disable-next-line import/no-commonjs
const pty = require("node-pty");


const exec = function(options = {}){

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

        const bashCmd = cmd;

        if(!detatch){
            logger.command(label, bashCmd);
        }

        const subprocess = childProcess.exec(cmd, {
            stdio: [
                0,
                1,
                2
            ]
        }, (error, stdout, stderr) => {

            if(error){

                if(!detatch){

                    console.log("");

                    logger.error(error.stack, { label });

                }

                reject(error, stderr);

            }else{

                resolve(stdout);

            }

        });

        if(!detatch){
            process.stdin.pipe(subprocess.stdin);
        }

        const piper = (std) => {

            subprocess[std].pipe(through.obj((string, encoding, done) => {

                let formattedString = string;

                (Array.isArray(filter) ? filter : [filter]).forEach((filt) => {
                    formattedString = formattedString.replace(filt, "");
                });

                if(!detatch){
                    logger.write(formattedString, { label });
                }

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

};

const spawn = function(options = {}){

    const {
        cwd = process.cwd(),
        command,
        environment = process.env,
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

        const bashCmd = cmd;

        if(!detatch){
            logger.command(label, bashCmd);
        }

        const [cm, ...args] = bashCmd.split(" ");

        const term = pty.spawn(cm, args, {
            cols: 500,
            cwd,
            env: environment
        });

        if(!detatch){
            process.stdin.pipe(term);
        }

        const response = [];

        term.on("data", (data) => {

            response.push(data);

            let formatted = data;

            (Array.isArray(filter) ? filter : [filter]).forEach((filt) => {
                formatted = formatted.replace(filt, "");
            });

            if(!detatch){
                logger.write(formatted, { label });
            }

        });

        term.on("exit", (code) => {

            term.destroy();

            if(!detatch){
                process.stdin.unref();
            }

            if(code === 1){
                reject(code);
            }else{
                resolve(response.join(""));
            }

        });

    });

};

export {
    exec,
    spawn
};
