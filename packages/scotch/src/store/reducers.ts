

import {
    combineReducers,
    Reducer
} from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";


export const createRootReducer = (history: History): Reducer => combineReducers({
    router: connectRouter(history)
});

