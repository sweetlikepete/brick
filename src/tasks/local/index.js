

import server from "./server";

import clean from "../clean";
import webpack from "../webpack";


const localTask = async function(...args){

    await clean(...args);

    await Promise.all([
        server(...args),
        webpack(...args)
    ]);

};


export default localTask;
