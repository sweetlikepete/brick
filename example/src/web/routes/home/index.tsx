

import React from "react";
import { Route as PageRoute } from "@sweetlikepete/scotch/lib/components/route";
import { Helmet } from "@sweetlikepete/scotch/lib/components/helmet";


export interface IRouteData{
    test: string;
}

export default class Route extends PageRoute<IRouteData>{

    public path = "/";

    public component = (): JSX.Element => (
        <div>
            <Helmet>
                <title>
                    { "homepage biatch" }
                </title>
            </Helmet>
            { "Home Page" }
        </div>
    );

    public getData(): Promise<IRouteData>{

        return new Promise((resolve): void => {

            resolve({
                test: "Home page"
            });

        });

    }

}
