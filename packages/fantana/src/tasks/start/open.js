

import open from "open-browsers";
import request from "request";

import { logger } from "../../utils";


const openBrowser = async function(config){

    try{

        await new Promise((resolve) => {

            const oneSecond = 1000;
            const path = `http://localhost:${ config.local.env.PORT }`;

            const test = (retry = 1) => {

                request(path, (error) => {

                    if(error){

                        logger.log("server open", `Retrying ${ path } in ${ retry } ${ retry === 1 ? "second" : "seconds" }`);

                        setTimeout(() => test(retry * 2), retry * oneSecond);

                    }else{

                        open(path);

                        resolve();

                    }

                });

            };

            test();


        });

    }catch(err){}

};


export default openBrowser;
