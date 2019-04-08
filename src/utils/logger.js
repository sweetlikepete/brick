

import chalk from "chalk";
import getCursorPosition from "get-cursor-position";
import strip from "strip-color";
import stripAnsi from "strip-ansi";
import { rjust } from "justify-text";
import table from "text-table";


const nonBreakingCharacterCode = 160;
const nonBreakingCharacter = String.fromCharCode(nonBreakingCharacterCode);

const emojis = {
    clean: "🌟",
    error: "💥",
    firestore: "🔥",
    lint: "🔎",
    memcached: "🧠",
    server: "💻",
    setup: "💿",
    webpack: "📦"
};

const lastLabelChunks = [];

const formatLabel = function(label, error = false){

    const cleanedLabel = stripAnsi(label);

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
        "#a00",
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

        lastLabelChunks[index] = lastLabelChunks[index] || null;

        const clearedChunk = chunk;
        const justify = 12;
        const emoji = index === 0 && emojis[chunk.toLowerCase()] ? ` ${ emojis[chunk.toLowerCase()] }` : "";
        const formattedChunk = index === 0 ? rjust(`${ clearedChunk }${ emoji }`, justify) : chunk;

        const bgColor = index < colors.length - 1 ? colors[index] : colors[colors.length - 1];
        const errorBgColor = index < errors.length - 1 ? errors[index] : errors[errors.length - 1];
        const firstColor = error ? "#ffffff" : "#eeeeee";
        const secondColor = error ? "#888888" : "#555555";

        let color = chunk === lastLabelChunks[index] ? secondColor : firstColor;

        color = index === 0 ? color : firstColor;

        if(chunk && chunk.trim()){
            lastLabelChunks[index] = chunk;
        }

        return `${ index === 0 ? "" : " " }${ chalk.hex(color).bgHex(error ? errorBgColor : bgColor)(` ${ formattedChunk } `) }`;

    })
    .join("");


};

const format = function(label, message = "", color, error = false){

    let formattedMessage = message ? strip(message) : "";

    formattedMessage = color ? chalk.hex(color)(formattedMessage) : message;

    return formattedMessage.split("\n").map((line) => `${ formatLabel(label, error) } ${ line }`).join("\n");

};

const inLineFormat = function(line, color){

    return line
    .replace(/(https?:\/\/[a-zA-Z0-9-_:./]*)/gu, chalk.hex(color || "#00b1e1")("$1"))
    .replace(/(\s)(src\/.*)($|\\s)/gu, `$1${ chalk.hex(color || "#ffea00")("$2") }$3`)
    // eslint-disable-next-line security/detect-non-literal-regexp
    .replace(new RegExp(`${ process.cwd().replace("/", "\\/") }\\/(.*?)($|\\s)`, "gu"), chalk.hex(color || "#ffea00")("$1"));

};


let lastLabel = null;
let started = false;


const logger = {

    error(label = "", message = ""){

        let formattedLabel = label;
        let formattedMessage = message;

        if(!message && label.stack){
            formattedLabel = "Error";
            formattedMessage = label;
        }

        if(formattedMessage.stack){
            formattedMessage = `${ formattedMessage.name }\n\n${ formattedMessage.stack }`;
        }

        this.log(`${ formattedLabel }`, formattedMessage, "#ff0000", true);

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

            console.log(inLineFormat(line, color));

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
