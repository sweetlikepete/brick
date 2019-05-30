

import { Client } from "@sweetlikepete/scotch";

import { App } from "../app";


export const initialize = function(): void{

    const client = new Client(App);

    client.start();

    console.log("shell initialized");

};
