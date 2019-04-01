

import {
    exec,
    kill
} from "../../utils";


const memcached = async function(){

    try{

        await kill("memcached");

        await exec({
            command: "memcached",
            label: "🧠 memcached"
        });

    }catch(error){}

};


export default memcached;
