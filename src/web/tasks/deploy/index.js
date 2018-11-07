

import Task from "../../../task";
import utils from "../../../utils";


export default class DeployTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.deploy";

    }

    async runner(){

        await utils.exec(`
            gcloud app deploy
            --quiet
            --project sweetlikepete777
            --version 1
            --verbosity=info
        `);

    }


}
