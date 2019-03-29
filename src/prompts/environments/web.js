

import { config } from "../../config";
import { prompt } from "../../utils";


const web = function(){

    const environments = config.platform.web.environments || [];

    if(environments.length === 0){

        throw new Error("Brick project has no environments configured");

    }

    return prompt("Web Environment", environments.map((environment) => ({
        name: environment.name,
        value: environment.project
    })));

};


export default web;
