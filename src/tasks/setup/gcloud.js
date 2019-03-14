

import exec from "../../utils/exec";


const label = ["setup gcloud"];


const installGoogleCloud = async function(){

    let gcloudVersion = null;

    try{

        gcloudVersion = await exec("gcloud --version", label, true);

    }catch(err){}

    if(gcloudVersion){

        await exec("gcloud components update", label);

    }else{

        await exec("gcloud components update", label);

    }

};


export default installGoogleCloud;
