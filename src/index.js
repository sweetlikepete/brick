

import merge from "merge";
import Web from "./web";


global.AUTOMATION = {
    production: false
};


export default class Automation{

    constructor(config = {}){

        if(!config.project){

            throw new Error("Brick instance was not initiated with a project.");

        }

        global.AUTOMATION.config = merge.recursive({}, {
            aliases: config.aliases || {},
            browsers: ["last 1 version"],
            production: config.production || false,
            staticFolder: "🥃"
        }, config);

        this.web = new Web();

        if(config.gulp){

            this.tasks(config.gulp);

        }

    }

    production(){

        // Need to have an async function for gulp.series to process this
        // eslint-disable-next-line require-await
        return async () => {

            global.AUTOMATION.config.production = true;

        };

    }

    tasks(gulp){

        gulp.task("lint", gulp.series(
            this.web.lint.run()
        ));

        gulp.task("clean", gulp.series(
            this.web.clean.run()
        ));

        gulp.task("build", gulp.series(
            this.web.clean.run(),
            "lint",
            this.web.webpack.run()
        ));

        gulp.task("watch", gulp.parallel(
            this.web.lint.watch(),
            this.web.webpack.watch()
        ));

        gulp.task("deploy", gulp.series(
            this.production(),
            "build",
            this.web.deploy.run()
        ));

        gulp.task("local", gulp.series(
            this.production(),
            "build",
            gulp.parallel(
                "watch",
                this.web.local.run()
            )
        ));

    }

}
