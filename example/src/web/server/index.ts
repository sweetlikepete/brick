

import server from "@sweetlikepete/scotch/lib/server";

import { App } from "../app";
import { routes } from "../routes";


const app = server.application({
    App,
    hostname: "www.sweetlikepete.com",
    jwt: {
        secret: "ndB2N7l2sqSpvRNJBXtNdmKfvj6up1VN"
    },
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
    },
    routes
});


server.start(app);

