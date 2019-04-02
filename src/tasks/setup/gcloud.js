

import {
    exec,
    logger
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

            await exec({
                command: "gcloud components update",
                label: "setup gcloud"
            });

        }else{

            await exec({
                command: `gcloud components install ${ component }`,
                label: `setup gcloud ${ component }`
            });

        }

    }else{

        let installed = false;

        try{

            // Check if the Google Cloud SDK is installed
            installed = await exec({
                command: "gcloud --version",
                detatch: true
            });

            logger.log("setup", "✔ gcloud", "#00ff00");

        }catch(error){}

        if(!installed){

            // Install the Google Cloud SDK
            await exec({
                command: "curl https://sdk.cloud.google.com | bash",
                label: "setup gcloud"
            });

            // Initialized the Google Cloud SDK
            await exec({
                command: "gcloud init",
                label: "setup gcloud"
            });

        }

    }

};


export default gcloud;
