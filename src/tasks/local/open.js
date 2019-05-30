

import open from "open-browsers";
import request from "request";
import logger from "@sweetlikepete/logger";


const label = "server";


const openBrowser = async function(config){

    try{

        await new Promise((resolve) => {

            const oneSecond = 1000;
            const path = `http://localhost:${ config.nodemon.port }`;
            const retryLogMinimum = 4;

            logger.log(`Opening ${ path } in your default browser`, { label });

            const test = (retry = 1) => {

                request(path, (error) => {

                    if(error){

                        if(retry > retryLogMinimum){

                            logger.log(`Opening ${ path } in your default browser: retry in ${ retry } ${ retry === 1 ? "second" : "seconds" }`, { label });

                        }

                        setTimeout(() => test(retry * 2), retry * oneSecond);

                    }else{

                        open(path);

                        resolve();

                    }

                });

            };

            test();

        });

    }catch(error){}

};


export default openBrowser;
