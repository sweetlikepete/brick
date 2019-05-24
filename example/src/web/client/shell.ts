

import client from "@sweetlikepete/scotch/lib/client";

import { App } from "../app";


export const initialize = function(): void{

    client.application({
        App
    });

    console.log("shell initialized");

};
