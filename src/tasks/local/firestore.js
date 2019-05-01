

import {
    spawn,
    kill
} from "../../utils";


const firestore = async function(config){

    const {
        host,
        port
    } = config.firestore;

    try{

        await kill(port);

        await spawn({
            command: `gcloud beta emulators firestore start --host-port=${ host }:${ port }`,
            filter: /\[firestore\]\s/gu,
            label: "firestore"
        });

    }catch(error){}

};


export default firestore;
