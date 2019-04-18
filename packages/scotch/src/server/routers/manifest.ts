

import express from "express";


enum EnumDisplay {
    Fullscreen = "fullscreen",
    Standalone = "standalone",
    MinimalUI = "minimal-ui",
    Browser = "browser",
}

export interface IManifestIcon {
    sizes: string;
    src: string;
    type: string;
}

export interface IManifest {
    // We don't get to pick the property names of the manifest.json spec
    /* eslint-disable camelcase */
    background_color: string;
    description: string;
    display: EnumDisplay;
    icons: IManifestIcon[];
    name: string;
    orientation?: string;
    scope?: string;
    short_name: string;
    start_url: string;
    theme_color: string;
    /* eslint-enable camelcase */
}

export const manifestRouter = (manifest: IManifest): express.Router => {

    // Force exact matches on paths
    const router = express.Router({
        caseSensitive: true,
        strict: true
    });

    router.get("/manifest.json", (request, response): void => {

        response.setHeader("Content-Type", "application/json");

        response
        .send(JSON.stringify(manifest))
        .end();

    });

    return router;

};
