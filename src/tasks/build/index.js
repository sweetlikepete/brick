

import clean from "../clean";
import lint from "../lint";


const build = async function(config){

    await clean(config);
    await lint(config);

};

export default build;
