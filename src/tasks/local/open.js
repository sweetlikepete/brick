

import open from "open-browsers";
import request from "request";

import { logger } from "../../utils";


const label = "server";


const openBrowser = async function(config){

    try{

        await new Promise((resolve) => {

            const oneSecond = 1000;
            const path = `http://localhost:${ config.nodemon.port }`;
            const retryLogMinimum = 4;

            logger.log(`${ label }`, `Opening ${ path } in your default browser`);

            const test = (retry = 1) => {

                request(path, (error) => {

                    if(error){

                        if(retry > retryLogMinimum){

                            logger.log(`${ label }`, `Opening ${ path } in your default browser: retry in ${ retry } ${ retry === 1 ? "second" : "seconds" }`);

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
