

import chalk from "chalk";
import strip from "strip-color";


const formatLabel = function(label){

    let label1 = label;
    let label2 = "";

    const label1Color = 60;
    const label2Color = 100;

    if(Array.isArray(label)){
        [label1, label2] = label;
    }

    label1 = label1 ? chalk.whiteBright.bgRgb(label1Color, label1Color, label1Color)(` ${ label1 } `) : "";
    label2 = label2 ? chalk.whiteBright.bgRgb(label2Color, label2Color, label2Color)(` ${ label2 } `) : "";

    return `${ label1 }${ label2 }`;

};

const format = function(label, message, color = "cyan"){

    let msg = message === true ? "✔" : message;

    msg = msg ? strip(msg) : "";
    msg = color === true ? message : chalk[message === true ? "green" : color](message === true ? "✔" : msg);

    return msg.split("\n").map((line) => `${ formatLabel(label) } ${ line }`).join("\n");

};


let lastLabel = null;


const log = function(label, message, color = "cyan"){

    const testLabel = Array.isArray(label) ? label.join("-") : label;

    const msg = format(label, message, color);

    if(lastLabel && lastLabel !== testLabel){
        console.log(formatLabel(""));
    }

    lastLabel = testLabel;

    msg.split("\n").forEach((line) => {

        console.log(line);

    });

};

const write = function(label, message, first = false){

    const lbl = formatLabel(label);

    if(first){
        process.stdout.write(`${ lbl } `);
    }

    process.stdout.write(message.replace(/\n/gu, `\n${ lbl } `));

};

export default {
    format,
    log,
    write
};
