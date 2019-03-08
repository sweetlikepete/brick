

import "@babel/polyfill";

import program from "commander";

import packageJSON from "../../package.json";
import { config } from "../config";
import build from "../tasks/build";
import clean from "../tasks/clean";
import lint from "../tasks/lint";
import local from "../tasks/local";


program.version(packageJSON.version);


program
.command("build")
.option("-p, --platform [platform]", "device platform (defaults to 'web')")
.action((options) => build(config, {
    platform: options.platform || "web"
}));


program
.command("clean")
.action(() => clean(config));


program
.command("deploy")
.option("-p, --platform [platform]", "device platform (defaults to 'web')")
.action((options) => build(config, {
    platform: options.platform || "web"
}));


program
.command("lint")
.option("-w, --watch", "Watch the lint")
.action((options) => lint(config, {
    watch: options.watch || false
}));


program
.command("local")
.option("-p, --platform [platform]", "device platform (defaults to 'web')")
.action((options) => local(config, {
    platform: options.platform || "web",
    watch: true
}));


program
.command("optimize")
.action(() => {

    console.log("build");

});


program
.command("promote")
.action(() => {

    console.log("build");

});


program.parse(process.argv);
