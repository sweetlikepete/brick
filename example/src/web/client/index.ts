

import "./index.scss";


if(process.env.watch){

    if(typeof module.hot !== "undefined"){

        module.hot.accept();

    }

}

const initializeShell = async (): Promise<void> => {

    const { initialize } = await import("./shell");

    initialize();

};

initializeShell();
