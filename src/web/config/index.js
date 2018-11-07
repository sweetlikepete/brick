

import fs from "fs";
import merge from "merge";
import path from "path";


const userConfigPath = path.resolve("automation.config.js");
// This is ok because it only happens during the build
// eslint-disable-next-line no-sync, import/no-dynamic-require
const userConfig = fs.existsSync(userConfigPath) ? require(userConfigPath) : {};


export default merge.recursive({}, {
    dest: "src/build",
    port: 20000,
    source: "src"
}, userConfig);
