

import clean from "../clean";
import webpack from "../webpack";


const localTask = async function(...args){

    await clean(...args);
    await webpack(...args);

};


export default localTask;
