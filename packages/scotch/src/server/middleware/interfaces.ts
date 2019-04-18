

import express from "express";


/* eslint-disable @typescript-eslint/no-type-alias */


export type IMiddleware = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => void


/* eslint-enable @typescript-eslint/no-type-alias */
