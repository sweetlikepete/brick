

const CleanBuildTask = require("./build");
const CleanCacheTask = require("./cache");
const gulp = require("gulp");
const Task = require("../../../task");


module.exports = class CleanTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.clean";

        this.build = new CleanBuildTask({ name: "web.clean.build" });
        this.cache = new CleanCacheTask({ name: "web.clean.cache" });

    }

    run(){

        return gulp.parallel(
            this.build.run(),
            this.cache.run()
        );

    }

};
