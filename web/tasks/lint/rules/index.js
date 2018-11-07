

const chalk = require("chalk");
const eslintRules = require("eslint-find-rules");
const log = require("fancy-log");
const path = require("path");
const Task = require("../../../../task");


module.exports = class RulesLintTast extends Task{

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
