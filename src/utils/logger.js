

import chalk from "chalk";
import flog from "fancy-log";
import strip from "strip-color";


const format = function(label, message, color = "cyan"){

    let label1 = label;
    let label2 = "";

    if(Array.isArray(label)){

        [
            label1,
            label2
        ] = label;

    }

    label1 = chalk.black.bgWhite(` ${ label1 } `);
    label2 = label2 ? chalk.whiteBright.bgBlackBright(` ${ label2 } `) : "";

    return `${ label1 }${ label2 } ${ chalk[message === true ? "green" : color](message === true ? "✔" : strip(message)) }`;

};

const log = function(...args){

    flog(format(...args));

};


export default {
    format,
    log
};
