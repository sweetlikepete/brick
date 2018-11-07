

const log = require("fancy-log");
const open = require("open-browsers");
const ports = require("../../config/ports");
const request = require("request");
const Task = require("../../../task");


module.exports = class LocalOpenTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.open";

    }

    runner(){

        const oneSecond = 1000;
        const path = `http://localhost:${ ports.server }`;

        const test = (retry = 1) => {

            request(path, (error) => {

                if(error){

                    log(`Retrying ${ path } in ${ retry } ${ retry === 1 ? "second" : "seconds" }`);

                    setTimeout(() => test(retry * 2), retry * oneSecond);

                }else{

                    open(path);

                }

            });

        };

        test();

    }

};
