
import logger from "@sweetlikepete/logger";

import { spawn } from "../../utils";


const label = "setup";


const gcloud = async function(){

    let installed = false;

    try{

        // Check if xcode-select is installed
        installed = await spawn({
            command: "xcode-select --version",
            detatch: true
        });

        logger.log("✔ xcode-select", {
            color: "#00ff00",
            label
        });

    }catch(error){}

    if(!installed){

        // Install xcode-select
        await spawn({
            command: "xcode-select --install",
            label
        });

    }

};


export default gcloud;
