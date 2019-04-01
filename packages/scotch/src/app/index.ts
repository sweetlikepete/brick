

import express from "express";

import start from "./start";


const app = express();

app.get("*", (request, response) => {

    response.set("content-type", "text/html");
    response.send("hello world");
    response.end();

});


export {
    app,
    start
};
