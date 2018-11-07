

import Clean from "./tasks/clean";
import Deploy from "./tasks/deploy";
import Lint from "./tasks/lint";
import Local from "./tasks/local";
import Webpack from "./tasks/webpack";


export default class Web{

    constructor(){

        this.clean = new Clean();
        this.deploy = new Deploy();
        this.local = new Local();
        this.lint = new Lint();
        this.webpack = new Webpack();

    }

}
