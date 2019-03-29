

import firestore from "./firestore";
import memcached from "./memcached";
import open from "./open";
import server from "./server";

import clean from "../clean";
import webpack from "../webpack";


const local = async function(...args){

    await clean(...args);

    await Promise.all([
        firestore(...args),
        memcached(...args),
        open(...args),
        server(...args),
        webpack(...args)
    ]);

};


export default local;
