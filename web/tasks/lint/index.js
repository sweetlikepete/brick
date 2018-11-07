

const gulp = require("gulp");
const JSLintTask = require("./js");
const RulesLintTask = require("./rules");
const Task = require("../../../task");
const TSLintTask = require("./ts");


module.exports = class LintTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.lint";

        this.linters = {
            js: {
                ext: "{js,jsx}",
                task: JSLintTask
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
                    `automation/**/*.${ linter.ext }`,
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
            this.ts.run()
        );

    }

    watch(){

        return gulp.parallel(
            this.js.watch(),
            this.ts.watch()
        );

    }

}
