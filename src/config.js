

import merge from "merge";
import rcfile from "rc-config-loader";


const rc = rcfile("brick");


const base = {
    exclude: "!**/{dist,node_modules}/**/*",
    include: "src/**/*"
};

const config = merge(
    {
        emulators: {
            firestore: {
                host: "127.0.0.1",
                port: 9811
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
                environments: []
            }
        }
    },
    rc ? rc.config : {},
    {
        targets: [
            "desktop",
            "mobile",
            "web"
        ]
    }
);


export {
    config
};
