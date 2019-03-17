

import {
    exec,
    kill
} from "../../utils";


const firestore = async function(config){

    const {
        host,
        port
    } = config.emulators.firestore;

    try{

        await kill(port);

        await exec({
            command: `gcloud beta emulators firestore start --host-port=${ host }:${ port }`,
            filter: /\[firestore\]\s/gu,
            label: "firstore"
        });

    }catch(err){}

};


export default firestore;
