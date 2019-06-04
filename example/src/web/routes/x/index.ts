

import { Route as PageRoute } from "@sweetlikepete/scotch";
import loadable from "@loadable/component";


// Required for @loadable/components to work correctly
// eslint-disable-next-line no-inline-comments
const AsyncPage = loadable((): Promise<{ default: React.ComponentType }> => import(/* webpackChunkName: "page-pageNotFound" */ "./page"));


export interface RouteData{
    test: string;
}

export default class Route extends PageRoute<RouteData>{

    public path = "/x/";

    public page = AsyncPage;

    public getData(): Promise<RouteData>{

        return new Promise((resolve): void => {

            resolve({
                test: "X page"
            });

        });

    }

}
