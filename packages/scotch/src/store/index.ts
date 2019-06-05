

import {
    applyMiddleware,
    compose,
    createStore,
    Store
} from "redux";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";

import { createRootReducer } from "./reducers";

import { createBrowserHistory } from "../history";


export interface ConfigureStoreResponse{
    history: History;
    store: Store;
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function configureStore(path: string, preloadedState?: any): ConfigureStoreResponse{

    const history = createBrowserHistory(path);

    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    );

    return {
        history,
        store
    };

}
