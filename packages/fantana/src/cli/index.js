

import "@babel/polyfill";

import program from "commander";

import packageJSON from "../../package.json";
import { config } from "../config";
import start from "../tasks/start";


program.version(packageJSON.version);


program
.command("start")
.option("-d, --directory [directory]", "directory of the CosMos installation")
.action((options) => start(config, {
    directory: options.directory || "."
}));


program.parse(process.argv);
