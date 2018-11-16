

import chalk from "chalk";
import codeframe from "codeframe";
import fs from "fs";
import gulpIf from "gulp-if";
import log from "fancy-log";
import path from "path";
import print from "gulp-print";
import stylelint from "gulp-stylelint";
import styleLintConfig from "../../../config/stylelint";
import Task from "../../../../task";
import touch from "touch";


const conf = {
    config: styleLintConfig,
    fix: true,
    reporters: [{
        formatter: (errFiles) => {

            errFiles.forEach((ef) => {

                if(ef.errored && ef.warnings && ef.warnings.length > 0){

                    const errorOutput = ef.warnings.map((f) => {

                        const errorFrame = codeframe.get({
                            column: f.column,
                            file: ef.source,
                            line: f.line - 1
                        });

                        return `${ chalk.red("SASS Lint Error ") }:\n${ ef.source }:${ f.line }:${ f.column }\n${ f.text }\n\n${ errorFrame }\n`;

                    }).join("\n");

                    log(errorOutput);

                    process.stdout.write("\u0007");

                }

            });

        }
    }]
};


export default class SCSSLintTast extends Task{

    runner(paths, watching = false){

        const autofixed = [];

        conf.failAfterError = !watching;

        return this.src(paths || this.paths)
        .pipe(print((p) => `Lint: ${ p }`))
        .pipe(stylelint(conf))
        .pipe(gulpIf((file) => {

            const [p] = file.history;
            // Local automation task, this is not a performance issue
            // eslint-disable-next-line no-sync
            const original = fs.readFileSync(p).toString();
            // Accessing a property of a Vinyl file, don't have a choice
            // eslint-disable-next-line no-underscore-dangle
            const processed = file._contents.toString();

            const fixed = original !== processed;

            let isJSON = null;

            if(fixed){

                try{

                    JSON.parse(processed);

                    isJSON = true;

                }catch(err){

                    isJSON = false;

                }

                if(!isJSON){
                    autofixed.push(p);
                }

            }

            // Only override the file if it's been changed and isn't JSON, it's JSON when there is an error
            return isJSON ? false : fixed;

        }, this.dest(".")))
        .on("finish", () => {

            // Touch anything that got autofixed so your editor knows about it
            autofixed.forEach((file) => touch.sync(file, {
                force: true,
                nocreate: true
            }));

        });

    }

}
