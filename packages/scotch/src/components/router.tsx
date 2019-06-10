

import { Switch } from "react-router-dom";
import React from "react";

import { Route as PageRoute } from "./route";


export interface RouterProps{
    // This can be anything
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    initial?: string;
    routes: PageRoute[];
}


export class Router extends React.Component<RouterProps>{

    public shouldComponentUpdate(): boolean{

        return true;

    }

    public render(): JSX.Element{

        return (
            <Switch>
                { this.props.routes.map((instance): JSX.Element => instance.render()) }
            </Switch>
        );

    }

}
