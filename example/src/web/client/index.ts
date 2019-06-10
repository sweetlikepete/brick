

import "./index.scss";


if(process.env.watch){

    if(typeof module.hot !== "undefined"){

        module.hot.accept();

    }

}

(async (): Promise<void> => {

    const { initialize } = await import(

        /* webpackChunkName: "shell" */
        "./shell"
    );

    initialize();

})();
