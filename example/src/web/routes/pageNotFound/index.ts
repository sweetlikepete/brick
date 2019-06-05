

import { Route as PageRoute } from "@sweetlikepete/scotch";


export interface RouteData{
    test: string;
}


export default class Route extends PageRoute<RouteData>{

    public path = "*";

    public page = /* #__LOADABLE__ */ (): Promise<{ default: React.ComponentType }> => import(/* webpackChunkName: "page-pageNotFound" */ "./page");

    public getData(): Promise<RouteData>{

        return new Promise((resolve): void => {

            resolve({
                test: "Page not found"
            });

        });

    }

}
