

import express from "express";


export interface IDomainConfiguration {


    /**
     * Required.
     *
     * The hostname the application will be served from. If configured, in production,
     * the application will redirect to this host automatically if it is served
     * from another host. This prevents the application from serving from the appspot.com
     * domain.
     *
     * e.g. www.sweetlikepete.com
     */
    hostname: string;

    /**
     * Optional.
     *
     * Is this application running on a local development server.
     *
     */
    local?: boolean;

}


export const domain = function(
    app: express.Express,
    config: IDomainConfiguration
): void{

    const {
        hostname,
        local = false
    } = config;

    /*
     * Redirect to the hostname if request.hostname !== hostname. This prevents
     * application-id.appspot.com domain from servering the application if the
     * application has a hostname configured.
     */
    app.use((
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ): void => {

        // Don't do this locally because we use http during development.
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

    });

};
