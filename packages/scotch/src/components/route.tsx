

import React from "react";
import {
    RouteComponentProps,
    Route as ReactRouterDomRoute
} from "react-router-dom";


export interface RouteComponentProperties<T> extends RouteComponentProps{
    data?: T;
    getData: () => Promise<T>;
}


export class Route<T> extends ReactRouterDomRoute{

    public exact = true;

    public path = "/";

    public sensitive = true;

    public strict = true;

    // Required for @loadable/components to work correctly
    // eslint-disable-next-line no-inline-comments
    public page = /* #__LOADABLE__ */ (): Promise<{ default: React.ComponentType }> => import(/* webpackChunkName: "product" */ "./page");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public component = (properties: any): JSX.Element => (
        <div>
            { "Empty Page" }
            { properties.data ? properties.data.test : "NO TEST DATA" }
        </div>
    );

    public getData(): Promise<object>{

        return new Promise((resolve): void => {

            resolve({});

        });

    }

}
