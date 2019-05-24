

import ReactDOM from "react-dom";


export const start = function(
    application: JSX.Element
): void{

    /*
     * If preact is being used, hydrate doesn't exist and render is the equivalent.
     * https://github.com/developit/preact/issues/1060
     */
    ReactDOM.render(application, document.querySelector("#app"));

};
