

/*
 * Possible errors At rules
 *
 * https://stylelint.io/user-guide/rules/#possible-errors
 */


import { atRules } from "../../config";


export default {
    rules: {

        /*
         * Disallow unknown at-rules.
         *
         * https://stylelint.io/user-guide/rules/at-rule-no-unknown/
         */
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: atRules
            }
        ]

    }
};
