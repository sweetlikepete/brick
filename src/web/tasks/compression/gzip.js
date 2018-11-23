

import cache from "gulp-cache";
import gulp from "gulp";
import print from "gulp-print";
import Task from "../../../task";
import zopfli from "gulp-zopfli-green";


export default class CompressionEncodeTask extends Task{

    runner(paths){

        return this.src(paths || this.paths)
        .pipe(print((p) => `GZ compress: ${ p }`))
        .pipe(cache(zopfli()))
        .pipe(gulp.dest("."));

    }

}
