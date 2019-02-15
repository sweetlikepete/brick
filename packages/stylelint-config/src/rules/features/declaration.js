

/*
 * Limit language features Declaration
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


export default {
    rules: {

        /*
         * Disallow longhand properties that can be combined into one shorthand property.
         *
         * https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
         */
        "declaration-block-no-redundant-longhand-properties": true,

        /*
         * Disallow !important within declarations.
         *
         * https://stylelint.io/user-guide/rules/declaration-no-important/
         */
        "declaration-no-important": true,

        /*
         * Specify a blacklist of disallowed property and unit pairs within declarations.
         *
         * https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist/
         */
        "declaration-property-unit-blacklist": null,

        /*
         * Specify a whitelist of allowed property and unit pairs within declarations.
         *
         * https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist/
         */
        "declaration-property-unit-whitelist": null,

        /*
         * Specify a blacklist of disallowed property and value pairs within declarations.
         *
         * https://stylelint.io/user-guide/rules/declaration-property-value-blacklist/
         */
        "declaration-property-value-blacklist": null,

        /*
         * Specify a whitelist of allowed property and value pairs within declarations.
         *
         * https://stylelint.io/user-guide/rules/declaration-property-value-whitelist/
         */
        "declaration-property-value-whitelist": null

    }
};
