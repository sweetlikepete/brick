

import * as React from "react";
import { App as ScotchApp } from "@sweetlikepete/scotch/lib/app";
import { Router } from "@sweetlikepete/scotch/lib/components/router";
// Import Loadable from "react-loadable";

import { routes } from "../routes";

/*
 *
 * Const LoadableComponentTest = Loadable.Map({
 *
 * loader: {
 * data: (): Promise<string> => new Promise((resolve): void => {
 *
 * const delay = 300;
 *
 * setTimeout((): void => {
 *
 * resolve("TESTICLES");
 *
 * }, delay);
 *
 * }),
 * Page: (): Promise<{ default: React.ComponentType<any> }> => import("../routes/home")
 * },
 *
 * loading(): JSX.Element{
 *
 * return (
 * <div>
 * { "Loading!" }
 * </div>
 * );
 *
 * },
 *
 * render(loaded, properties): React.ComponentType{
 *
 * const Page = loaded.Page.default;
 *
 * const data = loaded.data;
 *
 * console.log(data);
 *
 * return <Page { ...properties } data={ data } />;
 *
 * }
 *
 * });
 *
 */


export class App extends ScotchApp{

    public componentWillMount(): void{

        console.log("componentWillMount");

    }

    public render(): JSX.Element{

        return (
            <div>
                <p>
                    { "Hello Worldxxx!" }
                </p>
                <Router routes={ routes } />
            </div>
        );

    }

}

