

import automationConfig from "./automation";
import autoprefixer from "autoprefixer";
import fontSmoothing from "postcss-font-smoothing";
import fontVariant from "postcss-font-variant";
import imageSet from "postcss-image-set-polyfill";


export default function generateConfig(){

    const config = automationConfig();

    return {
        plugins: [
            autoprefixer({
                browsers: config.browsers,
                flexbox: "no-2009"
            }),
            fontSmoothing,
            fontVariant,
            imageSet
        ]
    };

};