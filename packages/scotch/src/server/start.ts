

import express from "express";


export const start = function(
    app: express.Application
): void{

    const port = 8080;

    const PORT = Number(process.env.PORT) || port;

    app.listen(PORT, (): void => {

        console.log(`App listening on port ${ PORT }`);
        console.log("Press Ctrl+ C to quit.");

    });

};
