

import fs from "fs";

import server from "@sweetlikepete/scotch/lib/server";


const app = server.application({
    hostname: "www.sweetlikepete.com",
    manifest: {
        backgroundColor: "#fff",
        description: "",
        display: "standalone",
        icons: [
            {
                sizes: "192x192",
                src: "/images/icons-192.png",
                type: "image/png"
            },
            {
                sizes: "512x512",
                src: "/images/icons-512.png",
                type: "image/png"
            }
        ],
        name: "Example",
        shortName: "Example shortname",
        startUrl: "/",
        themeColor: "#fff"
    }
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

