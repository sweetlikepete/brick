

import { Route } from "../../route";


export interface RouteData{
    test: string;
}


export default class XRoute extends Route{

    public id = "x";

    public path = "/x/";

    public getData(): Promise<RouteData>{

        return new Promise((resolve): void => {

            resolve({
                test: "x page"
            });

        });

    }

}
