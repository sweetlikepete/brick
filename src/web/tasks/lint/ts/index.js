

/*
 * Add in https://www.npmjs.com/package/tslint-eslint-rules
 */


import * as tslint from "tslint";
import chalk from "chalk";
import codeframe from "codeframe";
import fs from "fs";
import gulpTSLint from "gulp-tslint";
import log from "fancy-log";
import path from "path";
import print from "gulp-print";
import Task from "../../../../task";
import through from "through2";


export default class JSLintTast extends Task{

    runner(paths, watching = false){

        const tsConfig = path.join(process.cwd(), "tsconfig.json");
        const baseConfigPath = path.join(__dirname, "../../../config/tslint.json");
        const userConfigPath = path.join(process.cwd(), "tslint.json");

        // This is ok because it only happens during the build
        // eslint-disable-next-line no-sync
        if(fs.existsSync(tsConfig)){

            const conf = {
                // This is ok because it only happens during the build
                // eslint-disable-next-line no-sync
                configuration: fs.existsSync(userConfigPath) ? userConfigPath : baseConfigPath,
                fix: true,
                program: tslint.Linter.createProgram(tsConfig)
            };

            const errors = [];

            return this.src(paths || this.paths)
            .pipe(print((p) => `Lint: ${ p }`))
            .pipe(gulpTSLint(conf))
            .pipe(through.obj((file, encoding, callback) => {

                if(file.tslint.errorCount > 0){

                    const errorOutput = file.tslint.failures.map((f) => {

                        const column = f.startPosition.lineAndCharacter.character;
                        const line = f.startPosition.lineAndCharacter.line + 1;
                        const rule = chalk.red(f.ruleName);
                        const fileName = f.fileName;
                        const fail = chalk.yellow(f.failure);
                        const frame = codeframe.get({
                            column,
                            file: f.fileName,
                            line
                        });

                        return `${ chalk.red("TS Lint Error:") } ${ rule }\n${ fileName }:${ line }:${ column }\n${ fail }\n\n${ frame }\n`;

                    }).join("\n");

                    errors.push(file);

                    log(errorOutput);

                }

                callback(null, file);

            }))
            .on("finish", () => {

                if(errors.length > 0){

                    process.stdout.write("\u0007");

                    if(!watching){

                        // It's ok to quit the build script
                        // eslint-disable-next-line no-process-exit
                        process.exit();

                    }

                }

            });

        }

        return this.src(paths || this.paths);

    }

}
