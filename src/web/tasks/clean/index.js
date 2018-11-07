

import CleanBuildTask from "./build";
import CleanCacheTask from "./cache";
import gulp from "gulp";
import Task from "../../../task";


export default class CleanTask extends Task{

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

}
