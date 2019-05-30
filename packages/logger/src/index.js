

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
    anonymous: "🤔",
    clean: "🧻",
    datastore: "💾",
    deploy: "💩",
    error: "💥",
    firestore: "🔥",
    kill: "💀",
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
    status200: "#00ff00",
    status300: "#ffff00",
    status400: "#ff0000",
    status500: "#ff0000",
    urlColor: "#00b1e1"
};

const defaultLabel = "anonymous";

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

const inLineFormat = function(line){

    return line
    .replace(/(https?:\/\/[^(\s|")]*)/gu, chalk.hex(colors.urlColor)("$1"))
    .replace(/info:\s(POST|GET|PUT|PATCH|DELETE)\s(2\d\d)\s/gu, `info: $1 ${ chalk.hex(colors.status200)("$2") } `)
    .replace(/info:\s(POST|GET|PUT|PATCH|DELETE)\s(3\d\d)\s/gu, `info: $1 ${ chalk.hex(colors.status300)("$2") } `)
    .replace(/info:\s(POST|GET|PUT|PATCH|DELETE)\s(4\d\d)\s/gu, `info: $1 ${ chalk.hex(colors.status400)("$2") } `)
    .replace(/info:\s(POST|GET|PUT|PATCH|DELETE)\s(5\d\d)\s/gu, `info: $1 ${ chalk.hex(colors.status500)("$2") } `);

};

const logger = {

    command(label = "", command = ""){

        this.log(command.split(" && ").join("\n"), {
            color: "#ff5400",
            label
        });

    },

    error(message = "", options = {}){

        const {
            color,
            label = defaultLabel
        } = options;


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

        this.log(formattedMessage, {
            color: color === true ? null : color || colors.errorColor,
            error: true,
            label: formattedLabel
        });

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

    log(message = "", options = {}){

        const {
            label = defaultLabel,
            color,
            error = false
        } = options;

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
            const output = inLineFormat(line);

            console.log(cursor && cursor.col > 1 ? `\n${ output }` : output);

        });

        started = true;

    },

    table(label, labels, data, options){

        this.log(table([labels.map((lbl) => chalk.bold(lbl))].concat(data), {
            ...options,
            stringLength(string){

                return stripAnsi(string).length;

            }
        }), { label });

    },

    write(message = "", options = {}){

        const {
            label = defaultLabel,
            error = false
        } = options;

        let lbl = formatLabel(label);

        const testLabel = `${ label } ${ String(error) }`;
        const blank = started ? formatLabel(`${ nonBreakingCharacter }`) : "";
        const cursor = getCursorPosition.sync();

        // Normalize new line characters
        let output = message
        .replace(/\r\n/gu, "\n")
        .replace(/\n\r/gu, "\n")
        .replace(/\r/gu, "\n");

        /*
         * If this you're writing to the first col and your first character is a
         * new line, replace it with a label
         */
        if(cursor && cursor.col === 1){
            output = output.replace(/^\n/gu, `${ lbl } `);
        }

        // If this is the first of a repeating label series
        if(lastLabel !== testLabel){

            // Add a blank log above it
            console.log(cursor.col > 1 ? `\n${ blank }` : blank);

            // Add a label
            process.stdout.write(`${ lbl } `);

            // Set the last label
            lastLabel = testLabel;

            // Get another label so you won't have double bolding
            lbl = formatLabel(label);

        }

        output = output
        // Replace all clear lines with positional line writes
        // eslint-disable-next-line no-control-regex
        .replace(/[\u001b]\[K\n/gu, `\u001B[K\u001B[${ stripAnsi(lbl).length + 2 }G`)
        // Replace all new lines with new lines and labels
        .replace(/\n/gu, `\n${ lbl } `)
        // Replace all clear lines with positional line writes
        // eslint-disable-next-line no-control-regex
        .replace(/[\u001b]\[1G/gu, `\u001B[0K${ lbl }\u001B[${ stripAnsi(lbl).length + 2 }G`);

        // If a new label was writen into the output set the last label
        if(output.includes(lbl)){
            lastLabel = testLabel;
        }else if(cursor && cursor.col === 1){
            output = `${ lbl } ${ output }`;
        }

        process.stdout.write(`${ inLineFormat(output) }`);

    }

};


export default logger;
