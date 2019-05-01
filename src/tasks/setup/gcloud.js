

import logger from "@sweetlikepete/logger";

import {
    exec,
    spawn
} from "../../utils";


let versions = null;


const gcloud = async function(component){

    if(component){

        if(!versions){

            const rawVersions = await exec({
                command: "gcloud components list --format=json",
                detatch: true
            });

            versions = JSON.parse(rawVersions);

        }

        const [version] = versions.filter((item) => item.id === component);

        if(version.latest_version_string === version.current_version_string){

            logger.log("setup", `✔ gcloud ${ component }`, "#00ff00");

        }else if(version){

            await spawn({
                command: "gcloud components update",
                label: "setup"
            });

        }else{

            await spawn({
                command: `gcloud components install ${ component }`,
                label: "setup"
            });

        }

    }else{

        let installed = false;

        try{

            // Check if the Google Cloud SDK is installed
            installed = await spawn({
                command: "gcloud --version",
                detatch: true
            });

            logger.log("setup", "✔ gcloud", "#00ff00");

        }catch(error){}

        if(!installed){

            // Install the Google Cloud SDK
            await spawn({
                command: "curl https://sdk.cloud.google.com | bash",
                label: "setup"
            });

            // Initialized the Google Cloud SDK
            await spawn({
                command: "gcloud init",
                label: "setup"
            });

        }

    }

};


export default gcloud;
