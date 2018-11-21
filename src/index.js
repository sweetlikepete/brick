

import gulp from "gulp";
import merge from "merge";
import Web from "./web";


global.AUTOMATION = {
    production: false
};


export default class Automation{

    constructor(config = {}){

        global.AUTOMATION.config = merge.recursive({}, {
            browsers: ["last 1 version"],
            production: config.production || false,
            staticFolder: "static"
        }, config);

        this.web = new Web();

        gulp.task("lint", gulp.series(
            this.web.lint.run()
        ));

        gulp.task("clean", gulp.series(
            this.web.clean.run()
        ));

        gulp.task("build", gulp.series(
            this.web.clean.run(),
            "lint",
            this.web.webpack.run(),
            this.web.compression.run()
        ));

        gulp.task("watch", gulp.parallel(
            this.web.lint.watch(),
            this.web.webpack.watch(),
            this.web.compression.watch()
        ));

        gulp.task("deploy", gulp.series(
            this.production(),
            "build",
            this.web.deploy.run()
        ));

        gulp.task("local", gulp.series(
            "build",
            gulp.parallel(
                "watch",
                this.web.local.run()
            )
        ));

    }

    production(){

        // Need to have an async function for gulp.series to process this
        // eslint-disable-next-line require-await
        return async () => {

            global.AUTOMATION.config.production = true;

        };

    }

}
