
import logger from "@sweetlikepete/logger";

import { spawn } from "../../utils";


const gcloud = async function(){

    let installed = false;

    try{

        // Check if xcode-select is installed
        installed = await spawn({
            command: "xcode-select --version",
            detatch: true
        });

        logger.log("setup", "✔ xcode-select", "#00ff00");

    }catch(error){}

    if(!installed){

        // Install xcode-select
        await spawn({
            command: "xcode-select --install",
            label: "setup"
        });

    }

};


export default gcloud;
