

/*
 * Lint browser compatability of APIs used (caniuse as an ESLint plugin).
 *
 * https://github.com/amilajack/eslint-plugin-compat
 */


export default {
    plugins: ["compat"],
    rules: {

        /*
         * Disallow incompatible browser apis.
         *
         * https://github.com/amilajack/eslint-plugin-compat#installation
         */
        "compat/compat": "error"

    }
};
