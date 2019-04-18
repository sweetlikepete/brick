

import chalk from "chalk";
import codeframe from "codeframe";
import getCursorPosition from "get-cursor-position";
import strip from "strip-color";
import stripAnsi from "strip-ansi";
import { rjust } from "justify-text";
import table from "text-table";


const nonBreakingCharacterCode = 160;
const nonBreakingCharacter = String.fromCharCode(nonBreakingCharacterCode);

const emojis = {
    clean: "🧻",
    datastore: "💾",
    deploy: "💩",
    error: "💥",
    firestore: "🔥",
    lint: "🔎",
    memcached: "🧠",
    optimize: "🌟",
    server: "💻",
    setup: "💿",
    tamland: "🍆",
    webpack: "📦"
};

const colors = {
    errorColor: "#ff0000",
    errorLabelBgColor: "#7a170e",
    errorLabelColor: "#eeeeee",
    errorLabelColorRepeat: "#eeeeee",
    labelBgColor: "#222222",
    labelColor: "#eeeeee",
    labelColorRepeat: "#555555",
    lintErrorMessageColor: "#999999",
    urlColor: "#00b1e1"
};

let lastFormattedLabel = null;
let lastLabel = null;
let started = false;

const formatLabel = function(string, error = false){

    const label = stripAnsi(string);
    const clearedLabel = label;
    const justify = 12;
    const emoji = emojis[label.toLowerCase()] ? ` ${ emojis[label.toLowerCase()] }` : "";
    const formattedLabel = rjust(`${ clearedLabel }${ emoji }`, justify);
    const bgColor = colors.labelBgColor;
    const errorBgColor = colors.errorLabelBgColor;
    const firstColor = error ? colors.errorLabelColor : colors.labelColor;
    const secondColor = error ? colors.errorLabelColorRepeat : colors.labelColorRepeat;

    const color = label === lastFormattedLabel ? secondColor : firstColor;

    if(label && label.trim()){
        lastFormattedLabel = label;
    }

    return `${ chalk.hex(color).bgHex(error ? errorBgColor : bgColor)(` ${ formattedLabel } `) }`;

};

const format = function(label, message = "", color, error = false){

    let formattedMessage = message ? strip(message) : "";

    formattedMessage = color ? chalk.hex(color)(formattedMessage) : message;

    return formattedMessage.split("\n").map((line) => `${ formatLabel(label, error) } ${ line }`).join("\n");

};

const inLineFormat = function(line, color){

    return line
    .replace(/(https?:\/\/[a-zA-Z0-9-_:./]*)/gu, chalk.hex(color || colors.urlColor)("$1"));

};

const logger = {

    command(label = "", command = ""){

        const formattedCommand = command.split(" && ").join("\n");

        this.log(label, formattedCommand, "#ff5400");

    },

    error(label = "", message = "", preserveColor = false){

        let formattedLabel = label;
        let formattedMessage = message;

        if(!message){
            formattedLabel = "Error";
            formattedMessage = label;
        }

        if(formattedMessage.stack && formattedMessage.name){
            formattedMessage = `${ formattedMessage.name }\n\n${ formattedMessage.stack }`;
        }else if(formattedMessage.message){
            formattedMessage = formattedMessage.message;
        }

        this.log(`${ formattedLabel }`, formattedMessage, preserveColor ? null : colors.errorColor, true);

    },

    lint(files){

        files.forEach((errorFile) => {

            if(errorFile.errors && errorFile.errors.length > 0){

                const errorOutput = errorFile.errors.map((error) => {

                    const errorFrame = codeframe.get({
                        column: error.column,
                        file: errorFile.filePath,
                        line: error.line - 1
                    });

                    const errorPointer = `${ errorFile.filePath }:${ error.line }:${ error.column }`;

                    return `${ errorPointer }\n${ chalk.hex(colors.lintErrorMessageColor)(error.message) }\n\n${ errorFrame }\n`;

                }).join("\n");

                this.error("lint", errorOutput, true);

                process.stdout.write("\u0007");

            }

        });

    },

    log(label = "", message = "", color, error = false){

        const testLabel = `${ label } ${ String(error) }`;
        const formattedMessage = format(label, String(message), color, error);
        const blank = started ? formatLabel(`${ nonBreakingCharacter }`) : "";

        if(lastLabel !== testLabel && started){

            const cursor = getCursorPosition.sync();

            if(cursor){
                console.log(cursor.col > 1 ? `\n${ blank }` : blank);
            }

        }

        lastLabel = testLabel;

        formattedMessage.split("\n").forEach((line) => {

            const cursor = getCursorPosition.sync();
            const output = inLineFormat(line, color);

            console.log(cursor && cursor.col > 1 ? `\n${ output }` : output);

        });

        started = true;

    },

    table(label, labels, data, options){

        this.log(label, table([labels.map((lbl) => chalk.bold(lbl))].concat(data), {
            ...options,
            stringLength(string){
                return stripAnsi(string).length;
            }
        }));

    },

    write(label = "", message = "", first = false, error = false){

        const lbl = formatLabel(label, error);
        const testLabel = `${ label } ${ String(error) }`;
        const blank = started ? formatLabel(`${ nonBreakingCharacter }`) : "";
        const lblRepeat = formatLabel(label, error);

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
            (error ? chalk.red(formattedMessage) : inLineFormat(formattedMessage))
            .replace(/\n\r/gu, "\r")
            .replace(/\r\n/gu, `\r${ lblRepeat } `)
            .replace(/\n/gu, `\n${ lblRepeat } `)
            .replace(/\r/gu, `\r${ lblRepeat } `)
        );

        started = true;

    }

};


export default logger;
