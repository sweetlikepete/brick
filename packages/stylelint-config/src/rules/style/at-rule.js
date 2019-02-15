

/*
 * Stylistic issues At rule
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require or disallow an empty line before at-rules (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
         */
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-same-name-blockless"],
                ignore: ["after-comment"]
            }
        ],

        /*
         * Specify lowercase or uppercase for at-rules names (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/at-rule-name-case/
         */
        "at-rule-name-case": "lower",

        /*
         * Require a newline after at-rule names.
         *
         * https://stylelint.io/user-guide/rules/at-rule-name-newline-after/
         */
        "at-rule-name-newline-after": "always-multi-line",

        /*
         * Require a single space after at-rule names (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/at-rule-name-space-after/
         */
        "at-rule-name-space-after": "always",

        /*
         * Require a newline after the semicolon of at-rules (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/
         */
        "at-rule-semicolon-newline-after": "always",

        /*
         * Require a single space or disallow whitespace before the semicolons of at rules.
         *
         * https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/
         */
        "at-rule-semicolon-space-before": "never"

    }
};
