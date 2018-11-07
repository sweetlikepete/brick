

import config from "../../config/nodemon";
import nodemon from "nodemon";
import Task from "../../../task";
import utils from "../../../utils";


export default class LocalServerTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.server";

    }

    async runner(){

        // Kill any currently running script
        await utils.kill(`${ config.script }`);

        await new Promise((resolve) => {

            setTimeout(resolve, 1000);

        });

        nodemon(config);

    }

}
