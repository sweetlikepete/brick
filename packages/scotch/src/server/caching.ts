

import express from "express";


export interface CachingConfiguration {

    /**
     * Optional.
     *
     * Is this application running on a local development server.
     *
     */
    local?: boolean;

}


export const caching = function(
    app: express.Express,
    config: CachingConfiguration
): void{

    const {
        local = false
    } = config;

    // Disable etag on the local development server to prevent caching while testing
    if(local){
        app.disable("etag");
    }

};
