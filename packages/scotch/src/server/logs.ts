

import express from "express";

import logger from "../logger";


export const logs = function(app: express.Express): void{

    app.use((
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ): void => {

        const url = `${ request.protocol }://${ request.get("host") }${ request.originalUrl }`;

        response.on("finish", (): void => {

            logger.info(`${ request.method.toUpperCase() } ${ response.statusCode } ${ url }`, {
                httpRequest: {
                    remoteIp: request.connection.remoteAddress,
                    requestMethod: request.method,
                    requestUrl: request.url,
                    status: response.statusCode
                }
            });

        });

        next();

    });

};
