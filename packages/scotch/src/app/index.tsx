

import * as React from "react";


export class App extends React.Component{

    public shouldComponentUpdate(): boolean{

        return false;

    }

    public render(): JSX.Element{

        return (
            <div>
                <p>
                    { "Hello World!" }
                </p>
            </div>
        );

    }

}

