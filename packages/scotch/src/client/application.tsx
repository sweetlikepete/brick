

/*
 * Import { Frontload } from "react-frontload";
 */
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {
    Link,
    Router
} from "react-router-dom";

import createStore from "../store";


export interface IScotchClientConfig {
    App: React.ComponentClass;
}

const Appx = function(): JSX.Element{

    const greeting = "Hello Function Component! /";

    return (
        <h1>
            { greeting }
        </h1>
    );

};

const Foo = function(): JSX.Element{

    const greeting = "Hello Function Component! /x/";

    return (
        <h1>
            { greeting }
        </h1>
    );

};

const Bar = function(): JSX.Element{

    const greeting = "Hello Function Component! /bar";

    return (
        <h1>
            { greeting }
        </h1>
    );

};

export const application = function(config: IScotchClientConfig): void{

    const {
        App
    } = config;

    const {
        history,
        store
    } = createStore(window.location.pathname);

    const app = (
        <Provider store={ store }>
            <Router history={ history }>
                <Link to="/">
                    { "Home" }
                </Link>
                <Link to="/x/">
                    { "X" }
                </Link>
                <App />
            </Router>
        </Provider>
    );

    ReactDOM.render(app, document.querySelector("#app"));

};
