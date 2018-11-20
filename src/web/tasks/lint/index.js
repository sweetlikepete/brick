

import gulp from "gulp";
import JSLintTask from "./js";
import RulesLintTask from "./rules";
import SCSSLintTask from "./scss";
import Task from "../../../task";
import TSLintTask from "./ts";


export default class LintTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.lint";

        this.linters = {
            js: {
                ext: "{js,jsx,mjs}",
                task: JSLintTask
            },
            scss: {
                ext: "scss",
                task: SCSSLintTask
            },
            ts: {
                ext: "{ts,tsx}",
                task: TSLintTask
            }
        };

        Object.keys(this.linters).forEach((ext) => {

            const linter = this.linters[ext];

            this[ext] = new linter.task({
                name: `web.lint.${ ext }`,
                paths: [
                    `src/**/*.${ linter.ext }`,
                    `!**/build/**/*.${ linter.ext }`,
                    `!node_modules/**/*.${ linter.ext }`
                ]
            });

        });

        this.rules = new RulesLintTask({
            name: "web.lint.rules"
        });

    }

    run(){

        return gulp.parallel(
            this.js.run(),
            this.rules.run(),
            this.scss.run(),
            this.ts.run()
        );

    }

    watch(){

        return gulp.parallel(
            this.js.watch(),
            this.scss.watch(),
            this.ts.watch()
        );

    }

}
