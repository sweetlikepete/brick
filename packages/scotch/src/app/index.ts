

import express from "express";


const app = express();

app.get("*", (req, res) => {

    res.set("content-type", "text/html");
    res.send("hello world");
    res.end();

});

export {
    app
};
