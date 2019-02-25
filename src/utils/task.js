

import chalk from "chalk";
import log from "fancy-log";


const task = function(name, func){

    return async function asyncTask(...args){

        console.log("");

        await func(...args);

        log(`${ name }: ${ chalk.green("✔︎") }`);

    };

};

export {
    task
};
