

import gulpWatch from "gulp-watch";
import through from "through2";

import logger from "./logger";


const fail = function(label, message){

    if(message && typeof message === "string"){
        logger.log(label, message);
    }

    // Make it beep like a jeep
    process.stdout.write("\u0007");

};

const print = function(label, color = "#ffffff"){

    return through({ objectMode: true }, function blank(file, encoding, done){

        if(file.isNull()){
            return done();
        }

        logger.log(label ? `${ label }` : "gulp", file.path, color);

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
