

import brotli from "gulp-brotli";
import gulp from "gulp";
import print from "gulp-print";
import Task from "../../../task";


export default class CompressionEncodeTask extends Task{

    runner(paths){

        return this.src(paths || this.paths)
        .pipe(print((p) => `BR compress: ${ p }`))
        .pipe(brotli.compress({
            extension: "br"
        }))
        .pipe(gulp.dest("."));

    }

}
