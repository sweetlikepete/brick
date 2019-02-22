

import rcfile from "rc-config-loader";


const { config } = rcfile("brick") || {
    config: {
        lint: {
            css: ["src/**/*.{css,scss}"],
            js: ["src/**/*.{js,ts}"]
        },
        output: "build"
    }
};


export {
    config
};
