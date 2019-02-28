

import autoprefixer from "autoprefixer";
import fontSmoothing from "postcss-font-smoothing";
import fontVariant from "postcss-font-variant";
import imageSet from "postcss-image-set-polyfill";


const postcssLoader = (env, options) => ({
    loader: "postcss-loader",
    options: {
        plugins: [
            autoprefixer({
                browsers: options.browsers,
                flexbox: "no-2009"
            }),
            fontSmoothing,
            fontVariant,
            imageSet
        ]
    }
});


export default postcssLoader;
