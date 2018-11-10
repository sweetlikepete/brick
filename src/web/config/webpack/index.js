

import client from "./client";
import server from "./server";


export default function webpackConfig(watching = false){

    return {
        client: client(watching),
        server: server(watching)
    };

}

