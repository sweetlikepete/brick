

/*
    eslint
    react/require-optimization: "off",
    react/jsx-no-literals: "off",
    @typescript-eslint/no-unused-vars: "off",
    react/no-multi-comp: "off",
    max-classes-per-file: "off"

*/

import fs from "fs";
import path from "path";

import * as React from "react";
import express from "express";
import compression from "compression";
import { renderToString } from "react-dom/server";
import {
    matchPath,
    StaticRouter
} from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { Route as PageRoute } from "../../../components/route";
import logger from "../../../logger";
import
createStore,
{
    context,
    history
} from "../../../store";


export interface IAppRouterConfiguration {
    App: React.ComponentClass;
    local: boolean;
    routes: typeof PageRoute[];
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
let assetCache: any = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAssets = function(local: boolean): any{

    if(local || !assetCache){

        try{

            // It's ok because it only happens once per restart
            // eslint-disable-next-line no-sync, security/detect-non-literal-fs-filename
            assetCache = JSON.parse(fs.readFileSync(path.join(process.cwd(), "dist/client/webpack-assets.json")).toString());

        }catch(error){

            logger.error(error);

        }

    }

    return assetCache;

};

const scriptTag = function(scripts: string | string[]): string{

    return (typeof scripts === "string" ? [scripts] : scripts)
    .map((script: string): string => `
        <script
            type="text/javascript"
            src="${ script }"
        >
        </script>
    `)
    .join("");

};

const styleTag = function(styles: string | string[]): string{

    return (typeof styles === "string" ? [styles] : styles)
    .map((style: string): string => `
        <link
            rel="stylesheet"
            type="text/css"
            href="${ style }"
        >`)
    .join("");

};


export const appRouter = (config: IAppRouterConfiguration): express.Router => {

    const {
        App,
        local,
        routes
    } = config;

    // Force exact matches on paths
    const router = express.Router({
        caseSensitive: true,
        strict: true
    });

    router.use(compression());

    router.get("*/", async (request, response): Promise<void> => {

        const assets = getAssets(local);
        const store = createStore();

        let getData: (() => Promise<object>) = (): Promise<object> => new Promise((resolve): void => {
            resolve({});
        });

        let initial = "/";
        let match = null;

        routes.some((routeClass: typeof PageRoute): boolean => {

            const route = new routeClass({});

            // Use `matchPath` here
            match = matchPath(request.path, {
                exact: route.exact,
                path: route.path,
                strict: route.strict
            });

            if(match){
                getData = route.getData;
                initial = route.path;
            }

            return Boolean(match);

        });

        const data = match ? await getData() : {};

        const content = renderToString(
            <Provider store={ store }>
                <ConnectedRouter history={ history }>
                    <App />
                </ConnectedRouter>
            </Provider>
        );

        // <PageRouter data={ data } initial={ initial } routes={ routes } />

        const html = `
            <!doctype html>
                <html>
                <head>
                    <base href="/">
                    <meta name="generator" content="Idle Hands">
                    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=0,viewport-fit=cover">
                    <script id="app-state-data" type="application/json">${ JSON.stringify(data) }</script>
                    ${ styleTag(assets.index.css) }
                </head>
                <body>
                    <div id="app">${ content }</div>
                    ${ scriptTag(assets.index.js) }
                </body>
            </html>`;
        // .replace(/^\s*/gmu, "")
        // .replace(/(?:\r\n|\r|\n)/gu, " ")
        // .replace(/>\s*</gu, "><")
        // .replace(/\s*></gu, "><")
        // // You can't escape that character, it causes a parsing error
        // // eslint-disable-next-line no-div-regex
        // .replace(/="(.[^\s]*?)"/gu, "=$1");

        response.send(html);

        response.end();

    });

    return router;

};
