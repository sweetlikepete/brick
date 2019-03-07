

import merge from "merge";
import rcfile from "rc-config-loader";


const config = merge(
    {
        lint: {
            css: [
                "src/**/*.{css,scss}",
                "!**/{build,node_modules}/**/*.{css,scss}"
            ],
            js: [
                "src/**/*.{js,ts}",
                "!**/{build,node_modules}/**/*.{js,ts}"
            ]
        },
        platform: {
            web: {
                environments: []
            }
        }
    },
    rcfile("brick").config || {},
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
