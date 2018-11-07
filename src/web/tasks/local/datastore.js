

const ports = require("../../config/ports");
const Task = require("../../../task");
const utils = require("../../../utils");


module.exports = class LocalDataStoreTask extends Task{

    constructor(args = {}){

        super(args);

        this.name = args.name || "web.datastore";

    }

    async runner(){

        // Kill any currently running datastore emulator
        await utils.kill(ports.datastore);

        await utils.exec([
            "gcloud beta emulators datastore start",
            "--no-legacy",
            `--host-port localhost:${ ports.datastore }`,
            "--data-dir .datastore"
        ]);

    }

};
