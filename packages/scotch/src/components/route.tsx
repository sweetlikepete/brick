

import React from "react";
import {
    RouteComponentProps,
    Route as ReactRouterDomRoute
} from "react-router-dom";


export interface RouteComponentProperties<T> extends RouteComponentProps{
    data?: T;
    getData: () => Promise<T>;
}


export class Route extends ReactRouterDomRoute{

    public exact = true;

    public id = "home";

    public path = "/";

    public sensitive = true;

    public strict = true;

    // Required for @loadable/components to work correctly
    // eslint-disable-next-line no-inline-comments
    public component = /* #__LOADABLE__ */ (): Promise<{ default: React.ComponentType }> => import(/* webpackChunkName: "product" */ "./page");

    public getData(): Promise<object>{

        return new Promise((resolve): void => {

            resolve({});

        });

    }

}
