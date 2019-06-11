

import path from "path";

import * as React from "react";
import express from "express";
import compression from "compression";
import { renderToString } from "react-dom/server";
import { matchPath } from "react-router-dom";
import { HelmetData } from "react-helmet";
import { ChunkExtractor } from "@loadable/server";

import { Route as PageRoute } from "../../../components/route";
import createStore from "../../../store";
import { Scotch } from "../../../app";


export interface AppRouterConfiguration {
    Component: React.ComponentClass;
    local: boolean;
    routes: PageRoute[];
}


const minifyHTML = function(html: string): string{

    return html
    .replace(/^\s*/gmu, "")
    .replace(/(?:\r\n|\r|\n)/gu, " ")
    .replace(/>\s*</gu, "><")
    .replace(/\s*></gu, "><")
    // You can't escape that character, it causes a parsing error
    // eslint-disable-next-line no-div-regex
    .replace(/="(.[^\s]*?)"/gu, "=$1");

};


const helmetContext: {
    helmet?: HelmetData;
} = {};


// eslint-disable-next-line max-lines-per-function
export const appRouter = (config: AppRouterConfiguration): express.Router => {

    const {
        Component,
        routes
    } = config;

    // Force exact matches on paths
    const router = express.Router({
        caseSensitive: true,
        strict: true
    });

    router.use(compression());

    router.get("*/", async (request, response): Promise<void> => {

        const statsFile = path.resolve("../web/dist/client/loadable-stats.json");

        const {
            history,
            store
        } = createStore(request.path);

        let getData: (() => Promise<object>) = (): Promise<object> => new Promise((resolve): void => {
            resolve({});
        });

        let match = null;

        routes.some((route: PageRoute): boolean => {

            // Use `matchPath` here
            match = matchPath(request.path, {
                exact: route.exact,
                path: route.path,
                strict: route.strict
            });

            if(match){
                getData = (): Promise<object> => route.getData();
            }

            return Boolean(match);

        });

        const data = match ? await getData() : {};
        const extractor = new ChunkExtractor({
            entrypoints: ["index"],
            statsFile
        });

        const content = renderToString(extractor.collectChunks(
            <Scotch
                helmetContext={ helmetContext }
                history={ history }
                store={ store }
            >
                <Component />
            </Scotch>
        ));

        // Set the http2 link header with assets that need to be pushed
        response.setHeader("link", extractor.getLinkElements().map((element): string => {

            const link = element.props as {
                as: string;
                href: string;
                rel: string;
            };

            return `<${ link.href }>;rel=${ link.rel };as=${ link.as }`;

        }).join(","));

        const { helmet } = helmetContext;

        if(helmet){

            response.send(minifyHTML(`
                <!doctype html>
                    <html ${ helmet.htmlAttributes.toString() }>
                    <head>
                        ${ helmet.title.toString() }
                        ${ helmet.meta.toString() }
                        ${ helmet.link.toString() }
                        <base href="/">
                        <meta name="generator" content="Idle Hands">
                        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=0,viewport-fit=cover">
                        <script id="app-state-data" type="application/json">${ JSON.stringify(data) }</script>
                        ${ extractor.getLinkTags() }
                        ${ extractor.getStyleTags() }
                    </head>
                    <body ${ helmet.bodyAttributes.toString() }>
                        <div id="app">${ content }</div>
                        ${ extractor.getScriptTags() }
                    </body>
                </html>
            `));

        }else{

            throw new Error("Could not initialize helmet data");

        }

        response.end();

    });

    return router;

};
