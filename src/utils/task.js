

import logger from "./logger";


const task = function(name, func){

    return async function asyncTask(...args){

        console.log("");

        await func(...args);

        logger.log(name, true);

    };

};

export {
    task
};
