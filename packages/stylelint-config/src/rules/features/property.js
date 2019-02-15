

/*
 * Limit language features Property
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


export default {
    rules: {

        /*
         * Specify a blacklist of disallowed properties.
         *
         * https://stylelint.io/user-guide/rules/property-blacklist/
         */
        "property-blacklist": null,

        /*
         * Disallow vendor prefixes for properties.
         *
         * https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
         */
        "property-no-vendor-prefix": true,

        /*
         * Specify a whitelist of allowed properties.
         *
         * https://stylelint.io/user-guide/rules/property-whitelist/
         */
        "property-whitelist": null

    }
};
