

import gulp from "gulp";
import gzip from "gulp-gzip";
import print from "gulp-print";
import Task from "../../../task";


export default class CompressionEncodeTask extends Task{

    runner(paths){

        return this.src(paths || this.paths)
        .pipe(print((p) => `Gzip compress: ${ p }`))
        .pipe(gzip())
        .pipe(gulp.dest("."));

    }

}
