

import web from "./web";


const deploy = async function(config, options){

    await {
        web
    }[options.platform](config, options);

};


export default deploy;
