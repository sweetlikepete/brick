

import logger from "../logger";


export const isServer = !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);


let initialStateCache: object | undefined;

export const getInitialState = function(): object{

    if(initialStateCache){

        return initialStateCache;

    }

    const id = "app-state-data";

    // Do we have preloaded state available? Great, save it.

    let initialState = {};

    if(!isServer){

        const element = document.querySelector(`#${ id }`);

        if(element){

            try{

                initialState = JSON.parse(element.innerHTML);

            }catch(error){

                logger.error(`Could not parse initial data from element #${ id }`);

            }

            // Delete it once we have it stored in a variable
            element.remove();

        }else{

            logger.error(`Could not find initial data element #${ id }`);

        }

    }

    initialStateCache = initialState;

    return initialState;

};
