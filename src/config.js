

import merge from "merge";
import rcfile from "rc-config-loader";


const userConfig = rcfile("brick").config || {};
// This is fine for explicit no operation functions
// eslint-disable-next-line no-empty-function
const noop = () => {};


const base = {
    exclude: "!**/{dist,node_modules}/**/*",
    include: "**/*"
};

const defaults = {
    firestore: {
        host: "127.0.0.1",
        port: 9811
    },
    hooks: {
        build: {
            post: noop,
            pre: noop
        }
    },
    lint: {
        css: [
            `${ base.include }.{css,scss}`,
            `${ base.exclude }.{css,scss}`
        ],
        js: [
            `${ base.include }.{js,jsx,ts,tsx}`,
            `${ base.exclude }.{js,jsx,ts,tsx}`
        ]
    },
    modernizr: {
        features: []
    },
    nodemon: {
        port: 5555
    },
    optimize: {
        image: {
            paths: [
                `${ base.include }.{png,gif,jpg,jpeg,svg}`,
                `${ base.exclude }.{png,gif,jpg,jpeg,svg}`
            ]
        }
    },
    platform: {
        web: {
            environments: []
        }
    },
    webpack: {
        devServer: {
            port: 9000
        }
    }
};

const forced = {
    cwd: process.cwd(),
    targets: [
        "desktop",
        "mobile",
        "web"
    ]
};

const config = merge.recursive(
    true,
    defaults,
    userConfig,
    forced
);


export {
    config
};
