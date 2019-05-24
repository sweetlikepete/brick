

import {
    applyMiddleware,
    compose,
    createStore,
    Store
} from "redux";
import { routerMiddleware } from "connected-react-router";
import React from "react";

import { createRootReducer } from "./reducers";

import { createBrowserHistory } from "../history";

export const history = createBrowserHistory();

export const context = React.createContext({
    test: "WTF"
});


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function configureStore(preloadedState?: any): Store{

    return createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    );

}
