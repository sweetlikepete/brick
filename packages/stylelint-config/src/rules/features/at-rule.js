

/*
 * Limit language features At rule
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


import { atRules } from "../../config";


export default {
    rules: {

        /*
         * Specify a blacklist of disallowed at-rules.
         *
         * https://stylelint.io/user-guide/rules/at-rule-blacklist/
         */
        "at-rule-blacklist": ["extend"],

        /*
         * Disallow vendor prefixes for at-rules.
         *
         * https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
         */
        "at-rule-no-vendor-prefix": true,

        /*
         * Specify a requirelist of properties for an at-rule.
         *
         * https://stylelint.io/user-guide/rules/at-rule-property-requirelist/
         */
        "at-rule-property-requirelist": {
            "font-face": [
                "font-display",
                "font-family",
                "font-style"
            ]
        },

        /*
         * Specify a whitelist of allowed at-rules.
         *
         * https://stylelint.io/user-guide/rules/at-rule-whitelist/
         */
        "at-rule-whitelist": atRules

    }
};
