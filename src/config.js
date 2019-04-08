

import merge from "merge";
import rcfile from "rc-config-loader";


const userConfig = rcfile("brick").config || {};


const base = {
    exclude: "!**/{dist,build,node_modules}/**/*",
    include: "src/**/*"
};

const defaults = {
    firestore: {
        host: "127.0.0.1",
        port: 9811
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
            ],
            settings: {
                gifsicle: {
                    interlaced: true
                },
                jpegtran: {
                    progressive: true
                },
                optipng: {
                    optimizationLevel: 5
                },
                svgo: {
                    plugins: [
                        {
                            removeViewBox: true
                        }
                    ]
                }
            }
        }
    },
    platform: {
        web: {
            environments: [],
            webpack: {
                configFile: "src/web/webpack.config.js"
            }
        }
    }
};

const forced = {
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
