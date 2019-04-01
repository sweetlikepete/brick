

import express from "express";


const app = express();
const port = 8080;


app.get("/", (request, response) => {

    const success = 200;

    response
    .status(success)
    .send("Hello, world!")
    .end();

});


// eslint-disable-next-line no-process-env
const PORT = process.env.PORT || port;

app.listen(PORT, () => {

    console.log(`App listening on port ${ PORT }`);
    console.log("Press Ctrl+C to quit.");

});
