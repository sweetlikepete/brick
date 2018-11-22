

import gulp from "gulp";
import zopfli from "gulp-zopfli-green";
import print from "gulp-print";
import Task from "../../../task";


export default class CompressionEncodeTask extends Task{

    runner(paths){

        return this.src(paths || this.paths)
        .pipe(print((p) => `GZ compress: ${ p }`))
        .pipe(zopfli())
        .pipe(gulp.dest("."));

    }

}
