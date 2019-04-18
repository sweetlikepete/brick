

import express from "express";

import { IMiddleware } from "./interfaces";


interface IDomainMiddleware {
    hostname: string;
    local: boolean;
}


export const domainMiddleware = (
    {
        hostname,
        local = false
    }: IDomainMiddleware
): IMiddleware => (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
): void => {

    /*
     * Redirect all traffic to configured protocol and domain. Only do this
     * on production because we use http during development.
     */
    if(
        !local &&
        hostname &&
        (
            request.protocol !== "https" ||
            request.hostname !== hostname
        )
    ){

        response.redirect(`https://${ hostname }${ request.url }`);

        return;

    }

    next();

};
