

/*
 * The proper-arrows ESLint plugin provides rules that control the definitions
 * of => arrow functions, restricting them to a narrower and more proper/readable form.
 *
 * https://www.npmjs.com/package/@getify/eslint-plugin-proper-arrows
 */


export default {
    plugins: ["@getify/proper-arrows"],
    rules: {


        /*
         * The proper-arrows/name rule requires => arrow functions to be in a
         * position where they will receive an inferred name, such as from being
         * assigned to a variable or property.
         *
         * Off for now because we like anonymous arrow functions
         *
         * https://www.npmjs.com/package/@getify/eslint-plugin-proper-arrows#rule-name
         */
        "@getify/proper-arrows/name": [
            "off",
            {
                trivial: false
            }
        ],

        /*
         * The proper-arrows/params rule controls definitions of parameters
         * for => arrow functions.
         *
         * This rule can be configured to forbid unused parameter names ("unused"),
         * limit the number of parameters ("count"), and require parameter names
         * to be at least a certain length ("length"). Also, this rule can specify
         * a list of exceptions to always allow certain parameter names ("allow").
         *
         * https://www.npmjs.com/package/@getify/eslint-plugin-proper-arrows#rule-params
         */
        "@getify/proper-arrows/params": [
            "error",
            {
                unused: "trailing"
            }
        ],

        /*
         * The proper-arrows/return rule restricts the concise return values
         * for => arrow functions.
         *
         * https://www.npmjs.com/package/@getify/eslint-plugin-proper-arrows#rule-return
         */
        "@getify/proper-arrows/return": [
            "error",
            {
                object: true
            }
        ],

        /*
         * The proper-arrows/this rule requires => arrow functions to reference
         * the this keyword. It also supports a "never" configuration mode, which
         * reverses the rule and means that => arrow functions must never use this.
         *
         * Off for now because we want to make arrow functions that don't have this
         * in them
         *
         * https://www.npmjs.com/package/@getify/eslint-plugin-proper-arrows#rule-this
         */
        "@getify/proper-arrows/this": [
            "off",
            "always",
            {
                "no-global": true
            }
        ],

        /*
         * The proper-arrows/location rule restricts where in program
         * structure => arrow functions can be used.
         *
         * https://www.npmjs.com/package/@getify/eslint-plugin-proper-arrows#rule-where
         */
        "@getify/proper-arrows/where": [
            "error",
            {
                global: true
            }
        ]

    }
};
