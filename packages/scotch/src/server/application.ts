

import compression from "compression";
import express from "express";

import { domainMiddleware } from "./middleware/domain";
import {
    IManifest,
    manifestRouter
} from "./routers/manifest";
import {
    IStaticFile,
    staticRouter
} from "./routers/static";


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
}

export const application = function({
    cacheExpiration = "1y",
    hostname,
    manifest,
    staticFiles = [],
    staticFolder = "static"
}: IScotchServerApplication): express.Express{

    const local = process.env.local === "true" || false;
    const cwd = process.cwd();

    // Create the express application
    const app = express();

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
     * Redirect to the hostname if request.hostname !== hostname. This prevents
     * application-id.appspot.com domain from servering the application if the application
     * has a hostname configured.
     */
    app.use(domainMiddleware({
        hostname,
        local
    }));

    // Disable etag on the local development server to prevent caching while testing
    if(local){
        app.disable("etag");
    }

    /*
     * This middleware will attempt to compress response bodies for all requests.
     *
     * This middleware will never compress responses that include a Cache-Control
     * header with the no-transform directive, as compressing will transform the body.
     */
    app.use(compression({

        /*
         * The byte threshold for the response body size before compression is considered
         * for the response, defaults to 1kb. This is a number of bytes or any string
         * accepted by the bytes module.
         */
        threshold: 0
    }));

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

    return app;

};
