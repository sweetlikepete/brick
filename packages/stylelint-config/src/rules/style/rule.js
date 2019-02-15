

/*
 * Stylistic issues Rule
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require or disallow an empty line before rules (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/rule-empty-line-before/
         */
        "rule-empty-line-before": [
            "always",
            {
                ignore: ["after-comment"]
            }
        ]

    }
};
