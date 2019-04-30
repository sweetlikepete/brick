

import express from "express";


export interface IManifestIcon {
    sizes: string;
    src: string;
    type: string;
}

export interface IManifest {
    backgroundColor: string;
    description: string;
    display: string;
    icons: IManifestIcon[];
    name: string;
    orientation?: string;
    scope?: string;
    shortName: string;
    startUrl: string;
    themeColor: string;
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
        .send(JSON.stringify({
            // We don't get to pick the property names of the manifest.json spec
            /* eslint-disable camelcase */
            background_color: manifest.backgroundColor,
            description: manifest.description,
            display: manifest.display,
            icons: manifest.icons,
            name: manifest.name,
            orientation: manifest.orientation,
            scope: manifest.scope,
            short_name: manifest.shortName,
            start_url: manifest.startUrl,
            theme_color: manifest.themeColor
            /* eslint-enable camelcase */
        }))
        .end();

    });

    return router;

};
