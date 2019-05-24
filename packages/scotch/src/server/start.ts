

import express from "express";
import loadable from "react-loadable";

import logger from "../logger";


export const start = async function(
    app: express.Application
): Promise<void>{

    const port = 8080;

    const PORT = Number(process.env.PORT) || port;
    // Start up the server after the preloads complete

    try{

        await loadable.preloadAll();

        app.listen(PORT, (): void => {

            logger.debug(`App listening on port ${ PORT }`);
            logger.debug("Press Ctrl+ C to quit.");

        });

    }catch(error){

        logger.error("loadable.preloadAll() failed.");
        logger.error(error);

    }

};
