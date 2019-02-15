

/*
 * It's 2016 and you still use loops?
 *
 * https://www.npmjs.com/package/eslint-plugin-no-loops
 */


export default {
    plugins: ["no-loops"],
    rules: {

        /*
         * Disallow use of loops (for, for-in, while, do-while).
         *
         * https://www.npmjs.com/package/eslint-plugin-no-loops#rule
         */
        "no-loops/no-loops": "error"

    }
};
