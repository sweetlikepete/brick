
import { Store } from "redux";
import { History } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { loadableReady } from "@loadable/component";

import createStore from "../store";
import { Scotch } from "../app";


export class Client{

    private Application: React.ComponentClass;

    private history: History;

    private store: Store;

    public constructor(Application: React.ComponentClass){

        const {
            history,
            store
        } = createStore(window.location.pathname);

        this.history = history;
        this.store = store;

        this.Application = Application;

    }

    public start(): void{

        const Application = this.Application;

        const app = (
            <Scotch
                history={ this.history }
                store={ this.store }
            >
                <Application />
            </Scotch>
        );

        console.log("WTF BRO");

        loadableReady((): void => {

            console.log("WTF BRO 2");

            ReactDOM.hydrate(app, document.querySelector("#app"));

        });

    }

}
