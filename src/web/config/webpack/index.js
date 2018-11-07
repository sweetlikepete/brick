

const client = require("./client");
const server = require("./server");


module.exports = function webpackConfig(){

    return {
        client: client(),
        server: server()
    };

};

