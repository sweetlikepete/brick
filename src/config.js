

import merge from "merge";
import rcfile from "rc-config-loader";


const rc = rcfile("brick");

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
