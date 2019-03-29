

import open from "./open";
import server from "./server";


const local = async function(...args){

    await Promise.all([
        open(...args),
        server(...args)
    ]);

};


export default local;
