

import logger from "@sweetlikepete/logger";

import clean from "../clean";
import webpack from "../webpack";


const build = async function(config, options){

    await config.hooks.build.pre(config, options, logger);

    await clean(config, options);
    await webpack(config, options);

    await config.hooks.build.post(config, options, logger);

};


export default build;
