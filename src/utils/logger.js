

import chalk from "chalk";
import getCursorPosition from "get-cursor-position";
import strip from "strip-color";
import stripAnsi from "strip-ansi";


const nonBreakingCharacterCode = 160;
const nonBreakingCharacter = String.fromCharCode(nonBreakingCharacterCode);

const formatLabel = function(label, error = false){

    const cleanedLabel = stripAnsi(label);

    const colors = [
        "#333",
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

    return cleanedLabel
    .split(" ")
    .filter(Boolean)
    .map((chunk, index) => {

        let formattedChunk = chunk;

        if(index === 0 && chunk.length === 2){
            formattedChunk = `${ formattedChunk }`;
        }

        const color = index < colors.length - 1 ? colors[index] : colors[colors.length - 1];
        const errorColor = index < errors.length - 1 ? errors[index] : errors[errors.length - 1];

        return chalk.hex("#eeeeee").bgHex(error ? errorColor : color)(` ${ formattedChunk } `);

    })
    .join("");


};

const format = function(label, message = "", color, error = false){

    let formattedMessage = message ? strip(message) : "";

    formattedMessage = color ? chalk.hex(color)(formattedMessage) : message;

    return formattedMessage.split("\n").map((line) => `${ formatLabel(label, error) } ${ line }`).join("\n");

};


let lastLabel = null;

const blank = formatLabel(`${ nonBreakingCharacter }${ nonBreakingCharacter }`);


const logger = {

    error(label = "", message = ""){

        this.log(`${ label }`, message, "red", true);

    },

    log(label = "", message = "", color, error = false){

        const testLabel = `${ label } ${ String(error) }`;
        const formattedMessage = format(label, String(message), color, error);

        if(lastLabel !== testLabel){

            const cursor = getCursorPosition.sync();

            if(cursor){
                console.log(cursor.col > 1 ? `\n${ blank }` : blank);
            }

        }

        lastLabel = testLabel;

        formattedMessage.split("\n").forEach((line) => {

            console.log(line);

        });

    },

    write(label = "", message = "", first = false, error = false){

        const lbl = formatLabel(label, error);
        const testLabel = `${ label } ${ String(error) }`;

        if(first || lastLabel !== testLabel){

            if(lastLabel !== testLabel){

                const cursor = getCursorPosition.sync();

                if(cursor){
                    console.log(cursor.col > 1 ? `\n${ blank }` : blank);
                }

            }

            process.stdout.write(`${ lbl } `);

        }

        lastLabel = testLabel;

        const formattedMessage = message.replace(/[\n]+$/gu, "\n");

        process.stdout.write(
            (error ? chalk.red(formattedMessage) : formattedMessage)
            .replace(/\n\r/gu, "\r")
            .replace(/\r\n/gu, `\r${ lbl } `)
            .replace(/\n/gu, `\n${ lbl } `)
            .replace(/\r/gu, `\r${ lbl } `)
        );

    }

};


export default logger;
