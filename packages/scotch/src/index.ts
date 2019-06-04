

import { Client } from "./client";
import { Helmet } from "./components/helmet";
import { Route } from "./components/route";
import { Router } from "./components/router";


const isServer = !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);

// Needed so that webpack won't require this on the client
// eslint-disable-next-line no-eval
const { Server } = isServer ? eval("require")("./server") : {
    Server: null
};


export {
    Client,
    Helmet,
    Route,
    Router,
    Server
};
