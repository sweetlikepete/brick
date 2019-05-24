

/*
 * Import { Frontload } from "react-frontload";
 */
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import
createStore,
{
    context,
    history
} from "../store";


export interface IScotchClientConfig {
    App: React.ComponentClass;
}

const store = createStore();

console.log(store.getState());


export const application = function(config: IScotchClientConfig): void{

    const {
        App
    } = config;

    ReactDOM.render((
        <Provider store={ store }>
            <ConnectedRouter history={ history }>
                <App />
            </ConnectedRouter>
        </Provider>
    ), document.querySelector("#app"));

};
