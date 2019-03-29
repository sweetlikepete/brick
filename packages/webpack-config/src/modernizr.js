

import merge from "webpack-merge";
import rcfile from "rc-config-loader";


const userConfig = rcfile("modernizr").config || {};


const config = merge(
    {
        "feature-detects": [
            "css/flexbox",
            "css/filters",
            "css/vhunit",
            "css/vwunit",
            "css/backdropfilter",
            "svg/smil",
            "svg/inline",
            "dom/passiveeventlisteners",
            "storage/localstorage"
        ],
        minify: true,
        options: ["setClasses"]
    },
    userConfig
);


export default config;
