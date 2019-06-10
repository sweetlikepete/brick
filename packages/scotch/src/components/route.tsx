

import React from "react";
import {
    RouteComponentProps,
    Route as ReactRouterDomRoute
} from "react-router-dom";
import loadable from "@loadable/component";


export interface RouteComponentProperties<T> extends RouteComponentProps{
    data?: T;
    getData: () => Promise<T>;
}


export class Route{

    public exact: boolean = true;

    public id: string;

    public path: string;

    public sensitive: boolean = true;

    public strict: boolean = true;

    public getData(): Promise<object>{

        return new Promise((resolve): void => {

            resolve({});

        });

    }

    public loadable(): (() => Promise<{ default: React.ComponentType }>) | undefined{

        // We'll let this slide here
        // eslint-disable-next-line no-undefined
        return undefined;

    }

    public render(): JSX.Element{

        return (
            <ReactRouterDomRoute
                exact={ this.exact }
                key={ this.path }
                path={ this.path }

                /*
                 * We're going to let this one slide for now, because we need to override
                 * the render method and I can't think of how to do this without a function
                 */
                // eslint-disable-next-line react/jsx-no-bind, react-perf/jsx-no-new-function-as-prop
                render={ (): JSX.Element => {

                    const loadableComponent = this.loadable();

                    if(loadableComponent){

                        const Page = loadable(loadableComponent);

                        return (
                            <Page />
                        );

                    }

                    return (
                        <div>
                            {" blank "}
                        </div>
                    );

                } }
                sensitive={ this.sensitive }
                strict={ this.strict }
            />
        );

    }

}
