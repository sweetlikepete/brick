

import {
    Switch
} from "react-router-dom";
import React from "react";

import { Route as PageRoute } from "./route";


export interface IRouterProps{
    // This can be anything
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    initial?: string;
    routes: (typeof PageRoute)[];
}


export class Router extends React.Component<IRouterProps>{

    public shouldComponentUpdate(): boolean{

        return true;

    }

    public render(): JSX.Element{

        return (
            <Switch>
                { this.props.routes.map((PageRouteClass): JSX.Element => {

                    const instance = new PageRouteClass({});
                    const Component = instance.component;

                    return (
                        <PageRouteClass
                            exact={ instance.exact }
                            key={ instance.path }
                            path={ instance.path }

                            /*
                             * We're going to let this one slide for now, because we need to override
                             * the render method and I can't think of how to do this without a function
                             */
                            // eslint-disable-next-line react/jsx-no-bind, react-perf/jsx-no-new-function-as-prop
                            render={ (properties): JSX.Element => (
                                <Component
                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                    { ...properties }
                                    data={ this.props.initial === instance.path ? this.props.data : null }
                                    // eslint-disable-next-line @typescript-eslint/unbound-method
                                    getData={ instance.getData }
                                />
                            ) }
                            sensitive={ instance.sensitive }
                            strict={ instance.strict }
                        />
                    );
                }) }
            </Switch>
        );

    }

}
