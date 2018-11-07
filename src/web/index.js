

const Clean = require("./tasks/clean");
const Deploy = require("./tasks/deploy");
const Lint = require("./tasks/lint");
const Local = require("./tasks/local");
const Webpack = require("./tasks/webpack");


module.exports = class Web{

    constructor(){

        this.clean = new Clean();
        this.deploy = new Deploy();
        this.local = new Local();
        this.lint = new Lint();
        this.webpack = new Webpack();

    }

};
