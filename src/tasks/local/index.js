

import path from "path";

import firestore from "./firestore";
import memcached from "./memcached";
import open from "./open";
import server from "./server";
import tamland from "./tamland";

import clean from "../clean";
import webpack from "../webpack";


const local = async function(config, options){

    await clean(config, options);

    await tamland(config, options);

    process.chdir(path.join(process.cwd(), "src/web"));

    await Promise.all([
        firestore(config, options),
        memcached(config, options),
        open(config, options),
        server(config, options),
        webpack(config, options)
    ]);

};


export default local;
