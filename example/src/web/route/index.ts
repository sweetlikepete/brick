

import React from "react";
import { Route as PageRoute } from "@sweetlikepete/scotch";


export class Route extends PageRoute{

    public loadable(): () => Promise<{ default: React.ComponentType }>{

        /*
         * Webpack's static analyzer needs a single variable to figurer out a
         * dynamic lazy loading path. Don't use this.id, use the variable id.
         */
        const id: string = this.id;

        /*
         * Needed for @loadable/components to wrap this during babel transpilation
         *
         * https://www.smooth-code.com/open-source/loadable-components/docs/babel-plugin/#magic-comments
         *
         */
        // eslint-disable-next-line no-inline-comments
        return /* #__LOADABLE__ */ (): Promise<{ default: React.ComponentType }> => import(

            /* webpackChunkName: "[request]" */
            `./../routes/${ id }/page`
        );

    }

}
