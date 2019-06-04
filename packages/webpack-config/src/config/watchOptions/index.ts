

import { Configuration } from "webpack";


export default function configuration(): Configuration{

    return {
        watchOptions: {

            /*
             * Add a delay before rebuilding once the first file changed. This allows
             * webpack to aggregate any other changes made during this time period into
             * one rebuild. Pass a value in milliseconds
             *
             * https://webpack.js.org/configuration/watch/#watchoptionsaggregatetimeout
             */
            aggregateTimeout: 600,

            /*
             * For some systems, watching many file systems can result in a lot of CPU
             * or memory usage. It is possible to exclude a huge folder like node_modules
             *
             * https://webpack.js.org/configuration/watch/#watchoptionsignored
             */
            ignored: [
                "node_modules"
            ],

            /*
             * Turn on polling by passing true, or specifying a poll interval in milliseconds
             *
             * https://webpack.js.org/configuration/watch/#watchoptionspoll
             */
            poll: false
        }
    };

}
