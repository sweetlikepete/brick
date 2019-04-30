

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
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";


export interface IStaticFile {
    path: string;
    source: string;
}

export interface IStaticRouter {
    cacheExpiration?: string | number;
    cwd?: string;
    local?: boolean;
    staticFiles?: IStaticFile[];
    staticFolder: string;
}


const getStaticFileMap = function(
    staticFiles: IStaticFile[],
    staticFolder: string,
    cwd: string,
    watch: boolean
): IStaticFile[]{

    // Static public url base and source
    const source = "dist/client";
    const encodedStaticFolder = staticFolder.split("/").map((sub): string => encodeURIComponent(sub)).join("/");

    const customStaticFiles: IStaticFile[] = staticFiles.map((file): IStaticFile => ({
        path: file.path,
        source: file.source.replace(`/${ staticFolder }`, source)
    }));

    const defaultStaticFiles: IStaticFile[] = [
        {
            path: "/robots.txt",
            source: "robots.txt"
        }

    /**
     * Get rid of any default static file routes that are overridden by custom static
     * file routes. This is useful if you want to route to your own version in a
     * custom location in your project.
     */
    ].filter((file): boolean => {

        const duplicates = customStaticFiles.filter((custom): boolean => custom.path === file.path);

        return duplicates.length === 0;

    }).map((file): IStaticFile => {

        /**
         * If there is no default static file in the implementing project, check if
         * there is a static file default that can be used and use that instead.
         */
        if(
            !fs.existsSync(path.join(cwd, file.source)) &&
            fs.existsSync(path.join(__dirname, "../../static", file.source))
        ){

            return {
                ...file,
                source: path.relative(cwd, path.join(__dirname, "../../static", file.source))
            };

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

const setupWebpackMiddleware = function(
    router: express.Router,
    cwd: string
): void{

    const webpackConfig = require(path.join(cwd, "webpack.config.js"));
    const config = webpackConfig(process.env);
    const compiler = webpack(config);

    router.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        serverSideRender: true,
        stats: config.stats
    }));

    router.use(webpackHotMiddleware(compiler));

};

export const staticRouter = ({
    cacheExpiration = "1y",
    cwd = process.cwd(),
    local = false,
    staticFiles = [],
    staticFolder
}: IStaticRouter): express.Router => {

    const watch = Boolean(local && process.env.watch === "true");

    // Force exact matches on paths
    const router = express.Router({
        caseSensitive: true,
        strict: true
    });

    if(watch){

        setupWebpackMiddleware(router, cwd);

    }

    getStaticFileMap(staticFiles, staticFolder, cwd, watch).forEach((file): void => {

        router.use(file.path, express.static(path.join(cwd, file.source), {
            etag: true,
            maxAge: cacheExpiration
        }));

    });

    return router;

};
