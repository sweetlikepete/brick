

import exec from "../../utils/exec";


const gcloud = async function(){

    let installed = false;

    try{

        installed = await exec("gcloud --version", "setup gcloud check", true);

    }catch(err){

    }

    if(installed){

        await exec("gcloud components update", "setup gcloud upgrade");

    }else{

        await exec("curl https://sdk.cloud.google.com | bash", "setup gcloud install");

    }

};


export default gcloud;
