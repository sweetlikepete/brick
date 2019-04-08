

import express from "express";
import webpack from "webpack";


const start = function(
    app: express.Application,
    webpackConfig?: webpack.Configuration
): void {

    console.log(["webpackConfig", webpackConfig]);

    const port = 8080;

    // eslint-disable-next-line no-process-env
    const PORT = process.env.PORT || port;

    app.listen(PORT, () => {

        console.log(`App listening on port ${ PORT }`);
        console.log("Press Ctrl+ C to quit.");

    });

};

export default start;
