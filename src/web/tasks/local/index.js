

const gulp = require("gulp");
const LocalDatastoreTask = require("./datastore");
const LocalMemcacheTask = require("./memcache");
const LocalOpenTask = require("./open");
const LocalServerTask = require("./server");
const Task = require("../../../task");


module.exports = class LocalTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.local";

        this.datastore = new LocalDatastoreTask({ name: "web.local.datastore" });
        this.memcache = new LocalMemcacheTask({ name: "web.local.memcache" });
        this.open = new LocalOpenTask({ name: "web.local.open" });
        this.server = new LocalServerTask({ name: "web.local.server" });

    }

    run(){

        return gulp.parallel(
            this.datastore.run(),
            this.memcache.run(),
            this.open.run(),
            this.server.run()
        );

    }

};
