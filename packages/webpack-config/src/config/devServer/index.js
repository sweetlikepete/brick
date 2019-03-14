

import path from "path";


/*
 * The webpack-dev-server provides you with a simple web server and the ability
 * to use live reloading.
 *
 * https://webpack.js.org/configuration/dev-server/
 */
export default function configure(config, options){

    const targets = {

        client: {
            devServer: {
                compress: true,
                contentBase: path.join(process.cwd(), path.join("src", options.target)),
                port: 9000
            }
        }

    };

    return targets[options.target] || {};

}
