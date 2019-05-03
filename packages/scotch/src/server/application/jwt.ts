

import express from "express";
import expressJWT from "express-jwt";

import logger from "../../logger";


export interface IJWTConfiguration {

    /**
     * Optional.
     *
     * JWT Cookie Name.
     *
     */
    cookieName?: string;

    /**
     * Optional.
     *
     * JWT Secret.
     *
     */
    secret?: string;

}


export const jwt = function(
    app: express.Express,
    config: IJWTConfiguration
): void{

    const {
        cookieName = "jwt-cookie",
        secret = false
    } = config;

    if(secret){

        app.use(expressJWT({
            credentialsRequired: false,
            getToken: (request: express.Request): string|null => {

                const query = request.query;
                const cookies = request.cookies;
                const headers = request.headers;

                if(
                    cookies &&
                    cookies[cookieName]
                ){

                    return cookies[cookieName];

                }else if(
                    headers.authorization &&
                    headers.authorization.split(" ")[0] === "Bearer"
                ){

                    return headers.authorization.split(" ")[1];

                }else if(
                    query &&
                    query.token
                ){

                    return query.token;

                }

                return null;

            },
            secret
        }));

    }else{

        logger.warn("JWT middleware has not been configured. Missing jwt.secret in scotch configuration.");

    }


};
