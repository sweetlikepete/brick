

import chalk from "chalk";
import strip from "strip-color";


const formatLabel = function(label){

    // These are rgb values defining the level of gray in each labal chunk
    /* eslint-disable no-magic-numbers */
    const colors = [
        50,
        60,
        70,
        80,
        90,
        100
    ];
    /* eslint-enable no-magic-numbers */

    return label
    .split(" ")
    .filter(Boolean)
    .map((chunk, index) => {

        const color = index < colors.length - 1 ? colors[index] : colors[colors.length - 1];

        return chalk.hex("#eeeeee").bgRgb(color, color, color)(` ${ chunk } `);

    })
    .join("");


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

    process.stdout.write(
        message
        .replace(/\n\r/gu, "\r")
        .replace(/\r\n/gu, `\r${ lbl } `)
        .replace(/\n/gu, `\n${ lbl } `)
        .replace(/\r/gu, `\r${ lbl } `)
    );

};

export default {
    format,
    log,
    write
};
