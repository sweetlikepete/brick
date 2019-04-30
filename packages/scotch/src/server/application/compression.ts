

import compressionMiddleware from "compression";
import express from "express";


export const compression = function(
    app: express.Express
): void{

    /*
     * This middleware will attempt to compress response bodies for all requests.
     *
     * This middleware will never compress responses that include a Cache-Control
     * header with the no-transform directive, as compressing will transform the body.
     */
    app.use(compressionMiddleware({

        /*
         * The byte threshold for the response body size before compression is considered
         * for the response, defaults to 1kb. This is a number of bytes or any string
         * accepted by the bytes module.
         */
        threshold: 0
    }));


};
