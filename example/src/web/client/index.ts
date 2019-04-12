

// Needed for Hot Module Replacement
import test from "./test";

import "./index.scss";

console.log(["client process.env.watch", process.env.watch]);

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
