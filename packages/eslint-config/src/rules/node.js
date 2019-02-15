

/*
 * These rules relate to code running in Node.js, or in browsers with CommonJS
 *
 * https://eslint.org/docs/rules/#nodejs-and-commonjs
 */


export default {
    env: {
        node: true
    },
    globals: {
        __dirname: false,
        __filename: false,
        Buffer: false,
        global: false,
        module: false,
        process: false,
        Promise: false,
        require: false,
        System: false
    },
    rules: {

        /*
         * Require return statements after callbacks
         *
         * https://eslint.org/docs/rules/callback-return
         */
        "callback-return": "error",

        /*
         * Require require() calls to be placed at top-level module scope
         *
         * https://eslint.org/docs/rules/global-require
         */
        "global-require": "error",

        /*
         * Require error handling in callbacks
         *
         * https://eslint.org/docs/rules/handle-callback-err
         */
        "handle-callback-err": "error",

        /*
         * Disallow use of the Buffer() constructor
         *
         * https://eslint.org/docs/rules/no-buffer-constructor
         */
        "no-buffer-constructor": "error",

        /*
         * Disallow require calls to be mixed with regular variable declarations
         *
         * https://eslint.org/docs/rules/no-mixed-requires
         */
        "no-mixed-requires": "error",

        /*
         * Disallow new operators with calls to require
         *
         * https://eslint.org/docs/rules/no-new-require
         */
        "no-new-require": "error",

        /*
         * Disallow string concatenation with __dirname and __filename
         *
         * https://eslint.org/docs/rules/no-path-concat
         */
        "no-path-concat": "error",

        /*
         * Disallow the use of process.env
         *
         * https://eslint.org/docs/rules/no-process-env
         */
        "no-process-env": "error",

        /*
         * Disallow the use of process.exit()
         *
         * https://eslint.org/docs/rules/no-process-exit
         */
        "no-process-exit": "error",

        /*
         * Disallow specified modules when loaded by require
         *
         * https://eslint.org/docs/rules/no-restricted-modules
         */
        "no-restricted-modules": "error",

        /*
         * Disallow synchronous methods
         *
         * https://eslint.org/docs/rules/no-sync
         */
        "no-sync": "error"

    }
};
