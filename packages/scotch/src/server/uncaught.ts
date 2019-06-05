

import logger from "../logger";


export interface DomainConfiguration {

    /**
     * Optional.
     *
     * Is this application running on a local development server.
     *
     */
    local?: boolean;

}


export const uncaught = function(config: DomainConfiguration): void{

    /*
     * Listen for unhandled promise rejections and log the errors. If this isn't
     * done, it's pretty impossible to track these errors down.
     */
    process.on("unhandledRejection", (reason, promise): void => {

        logger.error(`Unhandled Rejection at: ${ promise }\nreason:\n${ reason }\n`);

        if(config.local){
            console.error(reason);
        }

    });

    /*
     * Listen for unhandled promise rejections and log the errors. If this isn't
     * done, it's pretty impossible to track these errors down.
     */
    process.on("uncaughtException", (exception): void => {

        logger.error(`Caught exception: ${ exception }\n`);

    });

};
