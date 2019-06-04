

import React from "react";
import {
    RouteComponentProps,
    Route as ReactRouterDomRoute
} from "react-router-dom";
import loadable from "@loadable/component";


// Required for @loadable/components to work correctly
// eslint-disable-next-line no-inline-comments
const AsyncPage = loadable((): Promise<{ default: React.ComponentType }> => import(/* webpackChunkName: "product" */ "./page"));


export interface IRouteComponentProperties<T> extends RouteComponentProps{
    data?: T;
    getData: () => Promise<T>;
}


export class Route<T> extends ReactRouterDomRoute{

    public exact = true;

    public path = "/";

    public page = AsyncPage;

    public sensitive = true;

    public strict = true;

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
