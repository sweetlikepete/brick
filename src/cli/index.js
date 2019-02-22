

// Polyfills are a special case
// eslint-disable-next-line import/no-unassigned-import
import "@babel/polyfill";

import program from "commander";

import packageJSON from "../../package.json";
import { config } from "../config";

import {
    build,
    clean,
    lint
} from "..";


program.version(packageJSON.version);


program.command("build")
.action(() => build(config));


program.command("clean")
.action(() => clean(config));


program.command("deploy")
.action(() => {

    console.log("build");

});


program.command("lint")
.option("-w, --watch", "Watch the lint")
.action((options) => lint(config, options.watch));


program.command("local")
.action(() => {

    console.log("build");

});


program.command("optimize")
.action(() => {

    console.log("build");

});


program.command("promote")
.action(() => {

    console.log("build");

});


program.parse(process.argv);
