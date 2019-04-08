

import webpack from "webpack";


const local = function(
    webpackConfig?: webpack.Configuration
): void {

    console.log(["webpackConfig", webpackConfig]);

    console.log("LOCAL BITCH");

};

export default local;
