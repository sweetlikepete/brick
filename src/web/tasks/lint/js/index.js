

const cache = require("gulp-cache");
const eslint = require("gulp-eslint");
const fs = require("fs");
const gulpIf = require("gulp-if");
const path = require("path");
const print = require("gulp-print").default;
const Task = require("../../../../task");
const through = require("through2");
const touch = require("touch");


const baseConfigPath = path.join(__dirname, "../../../config/eslint.js");
const userConfigPath = path.join(process.cwd(), "eslint.js");

const conf = {
    cache: true,
    configFile: fs.existsSync(userConfigPath) ? userConfigPath : baseConfigPath,
    fix: true,
    warnFileIgnored: true
};

const eslintOptions = conf.configFile;
const { devDependencies } = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json")));
const eslintVersionString = Object.keys(devDependencies || {})
.filter((key) => key.startsWith("eslint"))
.map((key) => `${ key }=${ devDependencies[key] }`)
.join(",");


module.exports = class JSLintTast extends Task{

    runner(paths, watching = false){

        // Returns true if eslint has made any automatic fixes to a file
        const fixed = (file) => Boolean(
            conf.fix &&
            file.eslint &&
            file.eslint.fixed
        );

        return this.src(paths || this.paths)
        .pipe(print((p) => `Lint: ${ p }`))
        // Cache if not watching
        .pipe(watching ? eslint(conf) : cache(eslint(conf), {
            // Cache key based on the file contents, eslint + plugin versions and eslint options
            key: (file) => `${ file.contents.toString("utf8") }${ eslintVersionString }${ eslintOptions }`,
            success: (file) => file.eslint.errorCount === 0,
            value: (file) => ({ eslint: file.eslint })
        }))
        .pipe(eslint.format("codeframe", this.fail))
        .pipe(gulpIf(fixed, this.dest(".")))
        .pipe(through.obj((file, encoding, callback) => {

            // If the file was fixed, we need to manually touch it so that it updates in our editor
            if(fixed(file)){
                touch(file.path);
            }

            callback(null, file);

        }))
        .pipe(watching ? this.skip() : eslint.failAfterError());

    }

};
