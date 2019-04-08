

import {
    app,
    start
} from "@sweetlikepete/scotch";
import config from "@sweetlikepete/webpack-config";


import "./index.scss";


if(process.env.mode === "development"){

    const go = async function(): Promise<void>{

        start(app, config.default);

    };

    go();

}else{

    start(app);

}

