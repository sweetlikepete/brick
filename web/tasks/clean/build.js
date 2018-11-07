

const path = require("path");

const Task = require("../../../task");
const utils = require("../../../utils");


module.exports = class CleanCacheTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.clean.build";

    }

    async runner(){

        await utils.exec(`rm -rf ${ path.join(process.cwd(), "src/web/build") }`);

    }

}
