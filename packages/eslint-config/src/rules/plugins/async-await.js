

/*
 * Rules for spacing around async and await keywords
 *
 * https://www.npmjs.com/package/eslint-plugin-async-await
 */


export default {
    plugins: ["async-await"],
    rules: {

        /*
         * Enforce space after async keyword
         *
         * https://www.npmjs.com/package/eslint-plugin-async-await#rules
         */
        "async-await/space-after-async": "error",

        /*
         * Enforce space after await keyword
         *
         * https://www.npmjs.com/package/eslint-plugin-async-await#rules
         */
        "async-await/space-after-await": "error"

    }
};
