

import cookieParser from "cookie-parser";
import express from "express";


export const cookie = function(
    app: express.Express
): void{

    /*
     * Add the cookie parsing middleware
     *
     * Parse Cookie header and populate req.cookies with an object keyed by the
     * cookie names.
     */
    app.use(cookieParser());

};
