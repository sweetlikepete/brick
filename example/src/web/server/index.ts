

import fs from "fs";

import {
    app,
    start
} from "@sweetlikepete/scotch";


app.get("*", (request, response, next): void => {

    fs.readFile("dist/server/index.html", (error, result): void => {

        if(error){

            next(error);

            return;

        }

        response.set("content-type", "text/html");
        response.send(result);
        response.end();

    });

});


start(app);

