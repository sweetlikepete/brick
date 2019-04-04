

/*
 * Disallow property values that are ignored due to another property value in the same rule.
 *
 * https://www.npmjs.com/package/stylelint-declaration-block-no-ignored-properties
 */


export default {
    plugins: [
        "stylelint-declaration-block-no-ignored-properties"
    ],
    rules: {

        /*
         * Disallow property values that are ignored due to another property value in the same rule.
         *
         * https://www.npmjs.com/package/stylelint-declaration-block-no-ignored-properties
         */
        "plugin/declaration-block-no-ignored-properties": true

    }
};
