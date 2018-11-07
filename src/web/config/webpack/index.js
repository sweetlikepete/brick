

import client from "./client";
import server from "./server";


export default function webpackConfig(){

    return {
        client: client(),
        server: server()
    };

}

