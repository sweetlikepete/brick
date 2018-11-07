

const config = require("../../config/nodemon");
const nodemon = require("nodemon");
const Task = require("../../../task");
const utils = require("../../../utils");


module.exports = class LocalServerTask extends Task{

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

};
