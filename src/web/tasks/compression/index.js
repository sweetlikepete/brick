

import CompressBrotliTask from "./brotli";
import CompressGzipTask from "./gzip";
import gulp from "gulp";
import Task from "../../../task";


export default class CompressTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.compress";

        const extensions = [
            "js",
            "css",
            "svg",
            "txt",
            "json"
        ];

        const paths = [
            `src/web/build/client/**/*.{${ extensions.join(",") }}`
        ];

        this.brotli = new CompressBrotliTask({
            name: "web.compress.brotli",
            paths
        });

        this.gzip = new CompressGzipTask({
            name: "web.compress.gzip",
            paths
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
