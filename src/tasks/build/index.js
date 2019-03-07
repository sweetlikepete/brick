

import clean from "../clean";
import lint from "../lint";
import webpack from "../webpack";


const buildTask = async function(...args){

    await clean(...args);
    await lint(...args);
    await webpack(...args);

};


export default buildTask;
