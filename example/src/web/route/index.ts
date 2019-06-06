

import React from "react";
import { Route as PageRoute } from "@sweetlikepete/scotch";


export default class Route<T> extends PageRoute{

    public id = "";

    public path = "/";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public constructor(props: any){

        super(props);

        if(!this.id){

            throw new Error("Route does not have a valid id");

        }

        this.component =

            /* #__LOADABLE__ */
            (): Promise<{ default: React.ComponentType }> => import(

                /* webpackChunkName: "page-home" */
                `../routes/${ this.id }/page`
            );

    }

}
