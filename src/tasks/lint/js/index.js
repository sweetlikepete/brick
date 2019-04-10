

import fs from "fs";
import path from "path";

import cache from "gulp-cache";
import eslint from "gulp-eslint";
import gulp from "gulp";
import gulpIf from "gulp-if";
import logger from "@sweetlikepete/logger";

import gulpUtils from "../../../utils/gulp";


const config = {
    cache: true,
    fix: true,
    warnFileIgnored: true
};

const rawPackageJSON = String(fs.readFileSync(path.join(process.cwd(), "package.json")));


const lintJs = gulpUtils.task((paths, watching) => {

    // Returns true if eslint has made any automatic fixes to a file
    const fixed = (file) => Boolean(
        config.fix &&
        file.eslint &&
        file.eslint.fixed
    );

    return new Promise((resolve) => {

        gulp.src(paths)
        .pipe(gulpUtils.print("lint"))
        .pipe(watching ? eslint(config) : cache(eslint(config), {
            // Cache key based on the file contents, eslint + plugin versions and eslint options
            key: (file) => `${ file.contents.toString("utf8") }${ rawPackageJSON }`,
            success: (file) => file.eslint.errorCount === 0,
            value: (file) => ({ eslint: file.eslint })
        }))
        .pipe(eslint.format((errorFiles) => {

            logger.lint(errorFiles.map((errorFile) => ({
                errors: errorFile.messages.map((error) => ({
                    column: error.column,
                    file: errorFile.filePath,
                    line: error.line + 1,
                    message: `${ error.message } (${ error.ruleId })`
                })),
                filePath: errorFile.filePath
            })));

        }, (message) => {

            gulpUtils.fail("lint", message);

        }))
        .pipe(gulpIf(fixed, gulp.dest(".")))
        .pipe(gulpUtils.touch(fixed))
        .pipe(watching ? gulpUtils.skip() : eslint.failAfterError())
        .on("finish", () => {

            resolve();

        });

    });

});


export default lintJs;
