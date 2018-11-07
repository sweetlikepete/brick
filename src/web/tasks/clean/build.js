

import path from "path";

import Task from "../../../task";
import utils from "../../../utils";


export default class CleanCacheTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.clean.build";

    }

    async runner(){

        await utils.exec(`rm -rf ${ path.join(process.cwd(), "src/web/build") }`);

    }

}
