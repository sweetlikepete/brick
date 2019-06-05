

import express from "express";


export interface ManifestConfigurationIcon {
    sizes: string;
    src: string;
    type: string;
}

export interface ManifestConfiguration {
    backgroundColor: string;
    description: string;
    display: string;
    icons: ManifestConfigurationIcon[];
    name: string;
    orientation?: string;
    scope?: string;
    shortName: string;
    startUrl: string;
    themeColor: string;
}

export const manifestRouter = (config: ManifestConfiguration): express.Router => {

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
            background_color: config.backgroundColor,
            description: config.description,
            display: config.display,
            icons: config.icons,
            name: config.name,
            orientation: config.orientation,
            scope: config.scope,
            short_name: config.shortName,
            start_url: config.startUrl,
            theme_color: config.themeColor
            /* eslint-enable camelcase */
        }))
        .end();

    });

    return router;

};
