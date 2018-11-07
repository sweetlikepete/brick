

const fs = require("fs");
const merge = require("merge");
const path = require("path");


const userConfigPath = path.resolve("automation.config.js");
// This is ok because it only happens during the build
// eslint-disable-next-line import/no-dynamic-require
const userConfig = fs.existsSync(userConfigPath) ? require(userConfigPath) : {};


module.exports = merge.recursive({}, {
    dest: "src/build",
    port: 20000,
    source: "src"
}, userConfig);
