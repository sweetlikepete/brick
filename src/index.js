

import Web from "./web";


global.AUTOMATION = {
    production: false
};


export default class Automation{

    constructor(){

        this.web = new Web();

    }

    production(){

        // Need to have an async function for gulp.series to process this
        // eslint-disable-next-line require-await
        return async () => {

            global.AUTOMATION.production = true;

        };

    }

}
