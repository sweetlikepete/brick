

/*
 * Limit language features Color
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


export default {
    rules: {

        /*
         * Require (where possible) or disallow named colors.
         *
         * https://stylelint.io/user-guide/rules/color-named/
         */
        "color-named": "never",

        /*
         * Disallow hex colors.
         *
         * Off for now because we like hex colors
         *
         * https://stylelint.io/user-guide/rules/color-no-hex/
         */
        "color-no-hex": null

    }
};
