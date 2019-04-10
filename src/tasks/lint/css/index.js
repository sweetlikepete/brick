

import fs from "fs";

import gulp from "gulp";
import gulpIf from "gulp-if";
import stylelint from "gulp-stylelint";
import touch from "touch";
import logger from "@sweetlikepete/logger";

import gulpUtils from "../../../utils/gulp";


const config = {
    fix: true,
    reporters: [
        {
            formatter: (errorFiles) => {

                logger.lint(errorFiles.map((errorFile) => ({
                    errors: errorFile.warnings.map((error) => ({
                        column: error.column,
                        file: errorFile.source,
                        line: error.line + 1,
                        message: error.text
                    })),
                    filePath: errorFile.source
                })));

            }
        }
    ]
};

const lintCss = gulpUtils.task((paths, watching) => {

    const autofixed = [];

    config.failAfterError = !watching;

    return new Promise((resolve) => {

        gulp.src(paths)
        .pipe(gulpUtils.print("lint"))
        .pipe(stylelint(config))
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

                }catch(error){

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


export default lintCss;
