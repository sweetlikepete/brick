

const Task = require("../../../task");
const utils = require("../../../utils");


module.exports = class LocalMemcacheTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.memcache";

    }

    async runner(){

        // Kill any currently running memcached
        await utils.kill("memcached");

        await utils.exec("memcached");

    }

}
