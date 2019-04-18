

import fs from "fs";

import server from "@sweetlikepete/scotch/lib/server";


const app = server.application({
    hostname: "www.sweetlikepete.com"
});


app.get("/", (request, response, next): void => {

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


server.start(app);

