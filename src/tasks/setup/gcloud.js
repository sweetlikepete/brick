

import logger from "@sweetlikepete/logger";

import {
    exec,
    spawn
} from "../../utils";


const label = "setup";

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

            logger.log(`✔ gcloud ${ component }`, {
                color: "#00ff00",
                label
            });

        }else if(version){

            await spawn({
                command: "gcloud components update",
                label
            });

        }else{

            await spawn({
                command: `gcloud components install ${ component }`,
                label
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

            logger.log("✔ gcloud", {
                color: "#00ff00",
                label
            });

        }catch(error){}

        if(!installed){

            // Install the Google Cloud SDK
            await spawn({
                command: "curl https://sdk.cloud.google.com | bash",
                label
            });

            // Initialized the Google Cloud SDK
            await spawn({
                command: "gcloud init",
                label
            });

        }

    }

};


export default gcloud;
