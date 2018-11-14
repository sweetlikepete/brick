

import merge from "merge";
import Web from "./web";


global.AUTOMATION = {
    production: false
};


export default class Automation{

    constructor(config = {}){

        global.AUTOMATION.config = merge.recursive({}, {
            browsers: ["last 1 version"],
            staticFolder: "static",
            production: false
        }, config);

        this.web = new Web();

    }

    production(){

        // Need to have an async function for gulp.series to process this
        // eslint-disable-next-line require-await
        return async () => {

            global.AUTOMATION.config.production = true;

        };

    }

}
