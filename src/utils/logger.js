

import chalk from "chalk";
import getCursorPosition from "get-cursor-position";
import strip from "strip-color";


const formatLabel = function(label, error = false){

    const colors = [
        "#222",
        "#333",
        "#444",
        "#555",
        "#666",
        "#777",
        "#888"
    ];

    const errors = [
        "#200",
        "#500",
        "#800",
        "#a00",
        "#c00",
        "#c00",
        "#c00"
    ];

    return label
    .split(" ")
    .filter(Boolean)
    .map((chunk, index) => {

        const color = index < colors.length - 1 ? colors[index] : colors[colors.length - 1];
        const errorColor = index < errors.length - 1 ? errors[index] : errors[errors.length - 1];

        return chalk.hex("#eeeeee").bgHex(error ? errorColor : color)(` ${ chunk } `);

    })
    .join("");


};

const format = function(label, message = "", color, error = false){

    let msg = message ? strip(message) : "";

    msg = color ? chalk.hex(color)(msg) : message;

    return msg.split("\n").map((line) => `${ formatLabel(label, error) } ${ line }`).join("\n");

};


let lastLabel = null;


const logger = {

    error(label = "", message = ""){

        this.log(`${ label }`, message, "red", true);

    },

    log(label = "", message = "", color, error = false){

        const testLabel = `${ label } ${ String(error) }`;

        const msg = format(label, String(message), color, error);

        if(lastLabel !== testLabel){
            console.log(getCursorPosition.sync().col > 1 ? "\n" : "");
        }

        lastLabel = testLabel;

        msg.split("\n").forEach((line) => {

            console.log(line);

        });

    },

    write(label = "", message = "", first = false, error = false){

        const lbl = formatLabel(label, error);
        const testLabel = `${ label } ${ String(error) }`;

        if(first || lastLabel !== testLabel){

            if(lastLabel !== testLabel){
                console.log(getCursorPosition.sync().col > 1 ? "\n" : "");
            }

            process.stdout.write(`${ lbl } `);

        }

        lastLabel = testLabel;

        const msg = message.replace(/([\n]+)$/gu, "\n");

        process.stdout.write(
            (error ? chalk.red(msg) : msg)
            .replace(/\n\r/gu, "\r")
            .replace(/\r\n/gu, `\r${ lbl } `)
            .replace(/\n/gu, `\n${ lbl } `)
            .replace(/\r/gu, `\r${ lbl } `)
        );

    }

};


export default logger;
