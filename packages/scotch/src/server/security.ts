

import express from "express";
import helmet from "helmet";


export interface SecurityConfiguration {

    /**
     * Optional.
     *
     * Helmet content security policy
     */
    csp?: helmet.IHelmetContentSecurityPolicyConfiguration;

    /**
     * Optional.
     *
     * Sets the X-Powered-By http response header
     */
    xPoweredBy?: string;
}


export const security = function(
    app: express.Express,
    config: SecurityConfiguration
): void{

    const {
        csp,
        xPoweredBy
    } = config;

    /*
     * By enabling the "trust proxy" setting via app.enable('trust proxy'), Express
     * will have knowledge that it's sitting behind a proxy and that the X-Forwarded-*
     * header fields may be trusted, which otherwise may be easily spoofed.
     *
     * Enabling this setting has several subtle effects. The first of which is that
     * X-Forwarded-Proto may be set by the reverse proxy to tell the app that it is
     * https or simply http. This value is reflected by req.protocol.
     *
     * The second change this makes is the req.ip and req.ips values will be populated
     * with X-Forwarded-For's list of addresses.
     */
    app.enable("trust proxy");

    /*
     * Configure headers with some basic protections
     *
     * https://www.npmjs.com/package/helmet
     */
    app.use(helmet());

    // Set up content security policy if it's configured
    if(csp){
        app.use(helmet.contentSecurityPolicy(csp));
    }

    // Set custom response headers
    app.use((
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ): void => {

        // Set the X-Powered-By header
        if(xPoweredBy){
            response.setHeader("X-Powered-By", xPoweredBy);
        }

        next();

    });

};
