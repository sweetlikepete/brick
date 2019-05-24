

import { Route as PageRoute } from "@sweetlikepete/scotch/lib/components/route";


export interface IRouteData{
    test: string;
}

export default class Route extends PageRoute<IRouteData>{

    public path = "/x/";

    public getData(): Promise<IRouteData>{

        return new Promise((resolve): void => {

            resolve({
                test: "X page"
            });

        });

    }

}
