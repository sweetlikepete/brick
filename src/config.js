

import rcfile from "rc-config-loader";


const { config } = rcfile("brick") || {
    config: {
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
        output: "build"
    }
};


export {
    config
};
