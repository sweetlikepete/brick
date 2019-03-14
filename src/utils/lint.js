

import gulpWatch from "gulp-watch";
import through from "through2";

import logger from "./logger";


const fail = function(message){

    if(message && typeof message === "string"){
        console.log(message);
    }

    // Make it beep like a jeep
    process.stdout.write("\u0007");

};

const print = function(label){

    return through({ objectMode: true }, function blank(file, encoding, done){

        if(file.isNull()){
            return done();
        }

        const lbl = label ? [
            "lint",
            label
        ] : label;

        logger.log(lbl, file.path, "cyan");

        // Not invalid since that function is bound by the through library
        // eslint-disable-next-line no-invalid-this
        this.push(file);

        return done();

    });

};

const skip = function(func = () => true){

    return through({ objectMode: true }, function blank(file, encoding, done){

        if(file.isNull()){
            return done();
        }

        func(file);

        // Not invalid since that function is bound by the through library
        // eslint-disable-next-line no-invalid-this
        this.push(file);

        return done();

    });

};

const task = function(func){

    return async function asyncLintTask(paths = __filename, watch = false){

        if(watch){

            gulpWatch(paths, {
                base: "src",
                events: [
                    "add",
                    "change",
                    "unlink",
                    "addDir",
                    "unlinkDir"
                ]
            }).on("change", (file) => {

                func(file, true);

            });

        }else{

            await func(paths);

        }

    };

};

const touch = function(fixed){

    return through.obj((file, encoding, done) => {

        // If the file was fixed, we need to manually touch it so that it updates in our editor
        if(fixed(file)){
            touch(file.path);
        }

        done(null, file);

    });

};


export default {
    fail,
    print,
    skip,
    task,
    touch
};
