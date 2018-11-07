

const gulp = require("gulp");
const log = require("fancy-log");
const through = require("through2");
const watch = require("gulp-watch");


module.exports = class Task{

    constructor(args = {}){

        this.paths = args.paths;
        this.name = args.name;

        this.dest = gulp.dest;

    }

    fail(message){

        if(message && typeof message === "string"){
            log(message);
        }

        // Make it beep like a jeep
        process.stdout.write("\u0007");

    }

    run(){

        const fn = () => this.runner();

        Object.defineProperty(fn, "name", {
            value: `${ this.name }`,
            writable: false
        });

        return fn;

    }

    runner(){

        return this.src(this.paths);

    }

    skip(func = () => true){

        return through({ objectMode: true }, function blank(f, encoding, cb){

            if(f.isNull()){
                return cb();
            }

            func(f);

            this.push(f);

            return cb();

        });

    }

    src(paths, options = { base: "./" }){

        return gulp.src(paths, options);

    }

    watch(){

        const fn = () => this.watcher();

        Object.defineProperty(fn, "name", {
            value: `${ this.name }.watch`,
            writable: false
        });

        return fn;

    }

    watcher(){

        watch(this.paths, {
            base: "src",
            events: [
                "add",
                "change",
                "unlink",
                "addDir",
                "unlinkDir"
            ]
        }).on("change", (file) => {

            this.runner(file, true);

        });

    }

}
