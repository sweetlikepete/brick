

import clean from "../clean";
import lint from "../lint";
import webpack from "../webpack";


const buildTask = async function(config){

    await clean(config);
    await lint(config);
    await webpack(config);

};


export default buildTask;
