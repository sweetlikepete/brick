

import {
    createBrowserHistory as createBrowserHistoryAlias,
    createMemoryHistory,
    History
} from "history";


export const isServer = !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);


export const createBrowserHistory = function(url = "/"): History{

    return isServer ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistoryAlias();

};
