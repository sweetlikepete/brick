

import React from "react";
import { Helmet } from "@sweetlikepete/scotch";


export default class Page extends React.PureComponent{

    public render(): JSX.Element{

        return (
            <div>
                <Helmet>
                    <title>
                        { "homepage biatch" }
                    </title>
                </Helmet>
                { "HOME PAGE | BABOOOM BITCH TITS" }
            </div>
        );

    }

}
