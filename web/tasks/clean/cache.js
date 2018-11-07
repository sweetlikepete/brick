

const cache = require("gulp-cache");
const path = require("path");
const Task = require("../../../task");
const utils = require("../../../utils");


module.exports = class CleanCacheTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.clean.cache";

    }

    async runner(){

        cache.clearAll();

        await utils.exec(`rm -rf ${ path.join(process.cwd(), "node_modules/.cache") }`);

    }

}
