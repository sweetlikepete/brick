

import cache from "gulp-cache";
import eslint from "gulp-eslint";
import fs from "fs";
import gulpIf from "gulp-if";
import path from "path";
import print from "gulp-print";
import Task from "../../../../task";
import through from "through2";
import touch from "touch";


const baseConfigPath = path.join(__dirname, "../../../config/eslint.js");
const userConfigPath = path.join(process.cwd(), ".eslintrc.js");

const conf = {
    cache: true,
    // This is ok because it only happens during the build
    // eslint-disable-next-line no-sync
    configFile: fs.existsSync(userConfigPath) ? userConfigPath : baseConfigPath,
    fix: true,
    warnFileIgnored: true
};

const eslintOptions = conf.configFile;
// This is ok because it only happens during the build
// eslint-disable-next-line no-sync
const { devDependencies } = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json")));
const eslintVersionString = Object.keys(devDependencies || {})
.filter((key) => key.startsWith("eslint"))
.map((key) => `${ key }=${ devDependencies[key] }`)
.join(",");


export default class JSLintTast extends Task{

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

}
