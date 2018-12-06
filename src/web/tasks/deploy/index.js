

import automationConfig from "../../config/automation";
import notify from "gulp-notify";
import path from "path";
import Task from "../../../task";
import utils from "../../../utils";


export default class DeployTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.deploy";

    }

    async runner(){

        const config = automationConfig();

        await utils.exec(`
            gcloud app deploy
            --quiet
            --project ${ config.project }
            --version 1
            --verbosity=info
        `);

        return this.src(__filename)
        .pipe(notify({
            contentImage: path.join(process.cwd(), "src/web/app/icons/app-icon/180.png"),
            icon: path.join(process.cwd(), "src/web/app/icons/app-icon/180.png"),
            message: `Project: ${ config.project }`,
            sound: "Blow",
            title: "Deploy Complete"
        }))

    }


}
