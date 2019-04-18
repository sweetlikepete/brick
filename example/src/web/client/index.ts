

// Needed for Hot Module Replacement
import test from "./test";

import "./index.scss";


if(process.env.watch){

    if(typeof module.hot !== "undefined"){
        module.hot.accept();
    }

}


document.addEventListener("DOMContentLoaded", (): void => {

    console.log(`loaded ${ test() }`);

});
