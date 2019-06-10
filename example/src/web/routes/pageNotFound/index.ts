

import { Route } from "../../route";


export interface RouteData{
    test: string;
}


export default class PageNotFoundRoute extends Route{

    public id = "pageNotFound";

    public path = "*";

    public getData(): Promise<RouteData>{

        return new Promise((resolve): void => {

            resolve({
                test: "Page not found page"
            });

        });

    }

}
