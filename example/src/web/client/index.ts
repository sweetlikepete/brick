

import test from "./test";

import "./index.scss";


if(process.env.watch){

    // Needed for Hot Module Replacement
    if(typeof module.hot !== "undefined"){
        module.hot.accept();
    }

}


document.addEventListener("DOMContentLoaded", (): void => {

    console.log(`loadedx ${ test() }`);

});
