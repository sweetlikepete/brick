

import "@babel/polyfill";


import program from "commander";
import logger from "@sweetlikepete/logger";

import packageJSON from "../../package.json";
import { config } from "../config";
import build from "../tasks/build";
import clean from "../tasks/clean";
import deploy from "../tasks/deploy";
import tamland from "../tasks/local/tamland";
import lint from "../tasks/lint";
import local from "../tasks/local";
import optimize from "../tasks/optimize";
import setup from "../tasks/setup";


process.on("unhandledRejection", (error) => logger.error(error));

process.on("uncaughtException", (error) => logger.error(error));


program.version(packageJSON.version);


const platform = function(id = "web"){

    process.chdir(`src/${ id }`);

    return id;

};


program
.command("build")
.option("-p, --platform [platform]", "device platform (defaults to 'web')")
.action((options) => build(config, {
    mode: "production",
    platform: platform(options.platform)
}));


program
.command("clean")
.action(() => clean(config));


program
.command("deploy")
.option("-p, --platform [platform]", "device platform (defaults to 'web')")
.action((options) => deploy(config, {
    mode: "production",
    platform: platform(options.platform)
}));


program
.command("lint")
.option("-w, --watch", "Watch the lint")
.option("-p, --platform [platform]", "device platform (defaults to 'web')")
.action((options) => lint(config, {
    platform: platform(options.platform),
    watch: options.watch || false
}));


program
.command("local")
.option("-p, --platform [platform]", "device platform (defaults to 'web')")
.option("-m, --mode [mode]", "development or production mode (defaults to 'production')")
.option("--production", "run the local server as close to production as possible (defaults to false)")
.action((options) => local(config, {
    mode: options.production ? "production" : "development",
    platform: platform(options.platform),
    watch: !options.production
}));


program
.command("optimize")
.action(() => optimize(config));


program
.command("local-tamland")
.action(() => tamland(config));


program
.command("setup")
.action(() => setup());


program
.command("promote")
.action(() => {

    console.log("promote");

});


program.parse(process.argv);
