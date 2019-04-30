

import express from "express";

import {
    IManifest,
    manifestRouter
} from "./routers/manifest";
import {
    IStaticFile,
    staticRouter
} from "./routers/static";
import { caching } from "./caching";
import { compression } from "./compression";
import { domain } from "./domain";
import { security } from "./security";
import { cookie } from "./cookie";
import { jwt } from "./jwt";


export interface IScotchServerApplication {

    /**
     * Optional.
     *
     * The length of time a static file served by this application should be cached
     * by web proxies and browsers. Sets the max-age property of the Cache-Control
     * header. The value is either milliseconds or a string of numbers and units,
     * separated by spaces, where units can be d for days, h for hours, m for minutes,
     * and s for seconds. For example, "4d 5h" sets cache expiration to 4 days and
     * 5 hours after the file is first requested.
     *
     * Default: "1y"
     */
    cacheExpiration?: string | number;

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
     * An object containing the data used to generate a web app manifest JSON file
     * that tells the browser about your web application and how it should behave
     * when 'installed' on the user's mobile device or desktop. Having a manifest
     * is required by Chrome to show the Add to Home Screen prompt.
     *
     * A typical manifest configuration includes information about the app name,
     * icons it should use, the start_url it should start at when launched, and more.
     *
     * https://developers.google.com/web/fundamentals/web-app-manifest/
     */
    manifest?: IManifest;
    staticFiles?: IStaticFile[];
    staticFolder?: string;

    /**
     * Optional.
     *
     * Sets the X-Powered-By http response header
     */
    xPoweredBy?: string;
}


export const application = function(config: IScotchServerApplication): express.Express{

    const local = process.env.local === "true" || false;
    const cwd = process.cwd();

    const {
        cacheExpiration = "1y",
        hostname,
        manifest,
        staticFiles = [],
        staticFolder = "static",
        xPoweredBy = "https://www.youtube.com/watch?v=e_DqV1xdf-Y"
    } = config;

    // Create the express application
    const app = express();

    security(app, { xPoweredBy });

    domain(app, {
        hostname,
        local
    });

    caching(app, { local });

    compression(app);

    // Add the static file router
    app.use(staticRouter({
        cacheExpiration,
        cwd,
        local,
        staticFiles,
        staticFolder
    }));

    // Add the /manifest.json router
    if(manifest){
        app.use(manifestRouter(manifest));
    }

    cookie(app);

    jwt(app, {
        secret: "wtfweafsdfasdgdfgwer"
    });

    return app;

};
