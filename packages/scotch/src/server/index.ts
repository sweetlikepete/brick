

import "@babel/polyfill";


import express from "express";
import helmet from "helmet";
import slash from "express-slash";

import {
    appRouter
} from "./routers/app";
import {
    ManifestConfiguration,
    manifestRouter
} from "./routers/manifest";
import {
    StaticFile,
    staticRouter
} from "./routers/static";
import {
    graphqlRouter,
    GraphqlRouterConfiguration
} from "./routers/graphql";
import { caching } from "./caching";
import { compression } from "./compression";
import { cookie } from "./cookie";
import { domain } from "./domain";
import {
    jwt as jwtSetup,
    JWTConfiguration
} from "./jwt";
import { logs } from "./logs";
import { security } from "./security";
import { uncaught } from "./uncaught";

import logger from "../logger";
import { Route } from "../components/route";


export interface ScotchServerOptions {

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
     * Optional.
     *
     * Helmet content security policy.
     *
     * Content Security Policy helps prevent unwanted content being injected into
     * your webpages; this can mitigate cross-site scripting (XSS) vulnerabilities,
     * malicious frames, unwanted trackers, and more.
     *
     * https://github.com/helmetjs/csp
     */
    csp?: helmet.IHelmetContentSecurityPolicyConfiguration;

    /**
     * Optional.
     *
     * GraphQL configuration.
     *
     */
    graphql?: GraphqlRouterConfiguration;

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
     * JWT configuration.
     *
     * e.g. {
     *   cookieName: "jwt-cookie",
     *   secret: "super-secret-jwt-secret"
     * }
     */
    jwt?: JWTConfiguration;

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
    manifest?: ManifestConfiguration;
    routes: Route[];
    staticFiles?: StaticFile[];
    staticFolder?: string;

    /**
     * Optional.
     *
     * Sets the X-Powered-By http response header
     */
    xPoweredBy?: string;

}


const local = process.env.local === "true" || false;


export class Server{

    public port: number;

    private app: express.Application;

    public constructor(Component: React.ComponentClass, options: ScotchServerOptions){

        const defaultPort = 8080;

        const cwd = process.cwd();
        const {
            cacheExpiration = "1y",
            hostname,
            jwt = {},
            manifest,
            routes,
            staticFiles = [],
            staticFolder = "static",
            xPoweredBy = "https://www.youtube.com/watch?v=e_DqV1xdf-Y"
        } = options;

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

        // Add the request logger here so it skips static file requests.
        logs(app);

        app.use(graphqlRouter());

        // Add the /manifest.json router
        if(manifest){
            app.use(manifestRouter(manifest));
        }

        app.use(slash());

        // Add the app router
        app.use(appRouter({
            Component,
            local,
            routes
        }));

        cookie(app);

        jwtSetup(app, jwt);

        uncaught({ local });

        this.app = app;

        this.port = Number(process.env.PORT) || defaultPort;

    }

    public async start(): Promise<void>{

        await new Promise((): void => {

            this.app.listen(this.port, (): void => {

                logger.debug(`App listening on port ${ this.port }`);
                logger.debug("Press Ctrl+ C to quit.");

            });

        });

    }

}
