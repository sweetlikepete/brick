

/*
 * Limit language features General
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


export default {
    rules: {

        /*
         * Limit the depth of nesting.
         *
         * https://stylelint.io/user-guide/rules/max-nesting-depth/
         */
        "max-nesting-depth": 12,

        /*
         * Disallow unknown animations.
         *
         * https://stylelint.io/user-guide/rules/no-unknown-animations/
         */
        "no-unknown-animations": true

    }
};
