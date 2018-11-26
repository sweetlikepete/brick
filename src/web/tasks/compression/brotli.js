

import brotli from "gulp-brotli";
import cache from "gulp-cache";
import gulp from "gulp";
import print from "gulp-print";
import Task from "../../../task";


const conf = {
    extension: "br"
};


export default class CompressionEncodeTask extends Task{

    runner(paths){

        return this.src(paths || this.paths)
        .pipe(print((p) => `BR compress: ${ p }`))
        .pipe(cache(brotli.compress(conf)))
        .pipe(gulp.dest("."));

    }

}
