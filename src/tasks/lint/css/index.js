

import fs from "fs";

import chalk from "chalk";
import codeframe from "codeframe";
import gulp from "gulp";
import gulpIf from "gulp-if";
import stylelint from "gulp-stylelint";
import touch from "touch";

import lintUtils from "../../../utils/lint";


const conf = {
    fix: true,
    reporters: [
        {
            formatter: (errFiles) => {

                errFiles.forEach((ef) => {

                    if(ef.errored && ef.warnings && ef.warnings.length > 0){

                        const errorOutput = ef.warnings.map((error) => {

                            const errorFrame = codeframe.get({
                                column: error.column,
                                file: ef.source,
                                line: error.line - 1
                            });

                            const errorPointer = `${ ef.source }:${ error.line }:${ error.column }`;

                            return `${ chalk.red("SASS Lint Error ") }:\n${ errorPointer }\n${ error.text }\n\n${ errorFrame }\n`;

                        }).join("\n");

                        console.log(errorOutput);

                        process.stdout.write("\u0007");

                    }

                });

            }
        }
    ]
};

const lintCssTask = lintUtils.task((paths, watching) => {

    const autofixed = [];

    conf.failAfterError = !watching;

    return new Promise((resolve) => {

        gulp.src(paths)
        .pipe(lintUtils.print("style"))
        .pipe(stylelint(conf))
        .pipe(gulpIf((file) => {

            const [p] = file.history;
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

        }, gulp.dest(".")))
        .on("finish", () => {

            // Touch anything that got autofixed so your editor knows about it
            autofixed.forEach((file) => touch.sync(file, {
                force: true,
                nocreate: true
            }));

            resolve();

        });

    });

});


export default lintCssTask;
