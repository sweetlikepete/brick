

import CompressBrotliTask from "./brotli";
import CompressGzipTask from "./gzip";
import gulp from "gulp";
import Task from "../../../task";


export default class CompressTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.compress";

        this.brotli = new CompressBrotliTask({
            name: "web.compress.brotli",
            paths: [
                `src/web/build/client/**/*.{js,css}`
            ]
        });

        this.gzip = new CompressGzipTask({
            name: "web.compress.gzip",
            paths: [
                `src/web/build/client/**/*.{js,css}`
            ]
        });

    }

    run(){

        return gulp.parallel(
            this.brotli.run(),
            this.gzip.run()
        );

    }

    watch(){

        return gulp.parallel(
            this.brotli.watch(),
            this.gzip.watch()
        );

    }

}
