

import {
    spawn,
    kill
} from "../../utils";


const memcached = async function(){

    try{

        await kill("memcached");

        await spawn({
            command: "memcached",
            label: "memcached"
        });

    }catch(error){}

};


export default memcached;
