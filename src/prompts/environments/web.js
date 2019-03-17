

import { config } from "../../config";
import { prompt } from "../../utils";


const webEnvironmentPrompt = function(){

    const envs = config.platform.web.environments || [];

    if(envs.length === 0){

        throw new Error("Brick project has no environments configured");

    }

    return prompt("Web Environment", envs.map((env) => ({
        name: env.name,
        value: env.project
    })));

};


export default webEnvironmentPrompt;
