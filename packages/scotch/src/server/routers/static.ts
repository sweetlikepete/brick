
/*
    eslint
    @typescript-eslint/no-require-imports: "off",
    @typescript-eslint/no-var-requires: "off",
    global-require: "off",
    import/no-dynamic-require: "off",
    no-sync: "off",
    security/detect-non-literal-fs-filename: "off",
    security/detect-non-literal-require: "off"
*/

import fs from "fs";
import path from "path";

import express from "express";
import proxy from "express-http-proxy";


export interface StaticFile {
    path: string;
    source: string;
}

export interface StaticRouter {
    cacheExpiration?: string | number;
    cwd?: string;
    local?: boolean;
    staticFiles?: StaticFile[];
    staticFolder: string;
}


const getStaticFileMap = function(
    staticFiles: StaticFile[],
    staticFolder: string,
    cwd: string,
    watch: boolean
): StaticFile[]{

    // Static public url base and source
    const source = "dist/client";
    const encodedStaticFolder = staticFolder.split("/").map((sub): string => encodeURIComponent(sub)).join("/");

    const customStaticFiles: StaticFile[] = staticFiles.map((file): StaticFile => ({
        path: file.path,
        source: file.source.replace(`/${ staticFolder }`, source)
    }));

    const defaultStaticFiles: StaticFile[] = [
        {
            path: "/robots.txt",
            source: "robots.txt"
        },
        {
            path: "/favicon.ico",
            source: "favicon.ico"
        }

    /**
     * Get rid of any default static file routes that are overridden by custom static
     * file routes. This is useful if you want to route to your own version in a
     * custom location in your project.
     */
    ].filter((file): boolean => {

        const duplicates = customStaticFiles.filter((custom): boolean => custom.path === file.path);

        return duplicates.length === 0;

    }).map((file): StaticFile => {

        /**
         * If there is no default static file in the implementing project, check if
         * there is a static file default that can be used and use that instead.
         */
        if(!fs.existsSync(path.join(cwd, file.source))){

            const packagedAlternative = path.join(__dirname, "../../static", file.source);

            if(fs.existsSync(packagedAlternative)){

                return {
                    ...file,
                    source: path.relative(cwd, packagedAlternative)
                };

            }


        }

        return file;

    });

    return (watch ? [] : [
        {
            path: `/${ encodedStaticFolder }`,
            source
        }
    ])
    .concat(defaultStaticFiles)
    .concat(customStaticFiles);

};

export const staticRouter = ({
    cacheExpiration = "1y",
    cwd = process.cwd(),
    local = false,
    staticFiles = [],
    staticFolder
}: StaticRouter): express.Router => {

    const watch = Boolean(local && process.env.watch === "true");
    const encodedStaticFolder = staticFolder.split("/").map((sub): string => encodeURIComponent(sub)).join("/");

    // Force exact matches on paths
    const router = express.Router({
        caseSensitive: true,
        strict: true
    });

    getStaticFileMap(staticFiles, staticFolder, cwd, watch).forEach((file): void => {

        router.use(file.path, express.static(path.join(cwd, file.source), {
            etag: true,
            maxAge: cacheExpiration
        }));

    });

    if(watch){

        router.use(`/${ encodedStaticFolder }`, proxy("localhost:9000", {
            timeout: 2000
        }));

    }else{

        router.use(`/${ encodedStaticFolder }/*`, (
            request: express.Request,
            response: express.Response
        ): void => {

            const notFoundStatusCode = 404;

            response
            .status(notFoundStatusCode)
            .send("404")
            .end();

        });

    }


    return router;

};
