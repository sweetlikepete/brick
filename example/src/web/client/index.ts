

// Needed for Hot Module Replacement
import test from "./test";

import "./index.scss";


if(process.env.watch){

    if(typeof module.hot !== "undefined"){
        module.hot.accept();
    }

}

console.log("abc");


document.addEventListener("DOMContentLoaded", (): void => {

    console.log(`lloadxxxx bitch ${ test() }`);

});

console.log(["module.hot", module.hot]);
