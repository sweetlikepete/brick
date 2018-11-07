

const config = require(".");
const fs = require("fs");
const merge = require("merge");
const path = require("path");
const ports = require("./ports");


const userConfigPath = path.resolve("nodemon.config.js");
// This is ok because it only happens during the build
// eslint-disable-next-line import/no-dynamic-require
const userConfig = fs.existsSync(userConfigPath) ? require(userConfigPath) : {};


module.exports = merge.recursive({}, {
    colours: true,
    delay: 500,
    env: {
        DATASTORE_EMULATOR_HOST: `localhost:${ ports.datastore }`,
        LOCAL: true,
        MEMCACHE_HOST: "127.0.0.1",
        MEMCACHE_PORT: ports.memcache,
        NODE_ENV: "production",
        NODE_PATH: path.join(config.source, "web"),
        PORT: ports.server
    },
    ext: "js",
    ignore: [
        path.join(config.source, "**/*.js.map")
    ],
    script: path.join(config.source, "web/build/server/main.js"),
    stdout: true,
    verbose: false,
    watch: [
        path.join(config.source, "web/build/server/main.js"),
        path.join(config.source, "web/build/stats.json")
    ]
}, userConfig);
