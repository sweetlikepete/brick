

import chalk from "chalk";
import eslintRules from "eslint-find-rules";
import log from "fancy-log";
import path from "path";
import Task from "../../../../task";


export default class RulesLintTast extends Task{

    async runner(){

        await new Promise((resolve, reject) => {

            const configPath = "../../../config/eslint.js";
            const eslintUnused = eslintRules(path.join(__dirname, configPath)).getUnusedRules();
            const errorMessage = `Missing stylelint rules in ${ configPath }`;

            if(eslintUnused.length > 0){

                log(chalk.red(errorMessage));

                eslintUnused.forEach((rule) => {
                    log(chalk.red(rule));
                });

            }

            if(eslintUnused.length > 0){

                reject(new Error(errorMessage));

            }else{

                resolve();

            }

        });

    }

}
