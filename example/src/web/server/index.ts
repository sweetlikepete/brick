

import {
    app,
    start
} from "@sweetlikepete/scotch";

import "./index.scss";


// Needed so webpack strips this in production
// eslint-disable-next-line no-process-env
if(process.env.mode === "development"){

    const go = function(): void{

        start(app);

    };

    go();

}else{

    start(app);

}

