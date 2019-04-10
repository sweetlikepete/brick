

import gifsicle from "imagemin-gifsicle";
import minify from "imagemin";
import jpegtran from "imagemin-jpegtran";
import optipng from "imagemin-optipng";
import svgo from "imagemin-svgo";


export default function imagemin(input, output){

    const config = {
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
    };

    return minify(input, output, {
        plugins: [
            gifsicle(config.gifsicle),
            jpegtran(config.jpegtran),
            optipng(config.optipng),
            svgo(config.svgo)
        ]
    });

}
