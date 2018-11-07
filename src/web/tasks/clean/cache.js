

import cache from "gulp-cache";
import path from "path";
import Task from "../../../task";
import utils from "../../../utils";


export default class CleanCacheTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.clean.cache";

    }

    async runner(){

        cache.clearAll();

        await utils.exec(`rm -rf ${ path.join(process.cwd(), "node_modules/.cache") }`);

    }

}
