

import React from "react";
import { Helmet } from "@sweetlikepete/scotch";

import style from "./page.scss";


export default class Page extends React.PureComponent{

    public render(): JSX.Element{

        return (
            <div className={ style.page }>
                <Helmet>
                    <title>
                        { "home" }
                    </title>
                    <meta content="BusinessLIVE" property="og:site_name" />
                </Helmet>
                { "NEW CONTENT" }
            </div>
        );

    }

}
