

import chalk from "chalk";
import getCursorPosition from "get-cursor-position";
import strip from "strip-color";
import stripAnsi from "strip-ansi";
import { rjust } from "justify-text";


const nonBreakingCharacterCode = 160;
const nonBreakingCharacter = String.fromCharCode(nonBreakingCharacterCode);

const emojis = {
    clean: "💖",
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
        const emoji = index === 0 && emojis[chunk] ? ` ${ emojis[chunk] }` : "";
        const formattedChunk = index === 0 ? rjust(`${ clearedChunk }${ emoji }`, justify) : chunk;

        const color = index < colors.length - 1 ? colors[index] : colors[colors.length - 1];
        const errorColor = index < errors.length - 1 ? errors[index] : errors[errors.length - 1];
        const firstColor = chunk === lastLabelChunks[index] ? "#555555" : "#eeeeee";

        if(chunk && chunk.trim()){
            lastLabelChunks[index] = chunk;
        }

        return `${ index === 0 ? "" : " " }${ chalk.hex(index === 0 ? firstColor : "#eeeeee").bgHex(error ? errorColor : color)(` ${ formattedChunk } `) }`;

    })
    .join("");


};

const format = function(label, message = "", color, error = false){

    let formattedMessage = message ? strip(message) : "";

    formattedMessage = color ? chalk.hex(color)(formattedMessage) : message;

    return formattedMessage.split("\n").map((line) => `${ formatLabel(label, error) } ${ line }`).join("\n");

};


let lastLabel = null;
let started = false;


const logger = {

    error(label = "", message = ""){

        this.log(`${ label }`, message, "#ff0000", true);

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

            console.log(line);

        });

        started = true;

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
            (error ? chalk.red(formattedMessage) : formattedMessage)
            .replace(/\n\r/gu, "\r")
            .replace(/\r\n/gu, `\r${ lblRepeat } `)
            .replace(/\n/gu, `\n${ lblRepeat } `)
            .replace(/\r/gu, `\r${ lblRepeat } `)
        );

        started = true;

    }

};


export default logger;
