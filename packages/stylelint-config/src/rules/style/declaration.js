

/*
 * Stylistic issues Declaration
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require a single space or disallow whitespace after the bang of declarations (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-bang-space-after/
         */
        "declaration-bang-space-after": "never",

        /*
         * Require a single space or disallow whitespace before the bang of declarations (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-bang-space-before/
         */
        "declaration-bang-space-before": "always",

        /*
         * Require a newline or disallow whitespace after the colon of declarations (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-colon-newline-after/
         */
        "declaration-colon-newline-after": "always-multi-line",

        /*
         * Require a single space or disallow whitespace after the colon of declarations (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-colon-space-after/
         */
        "declaration-colon-space-after": "always-single-line",

        /*
         * Require a single space or disallow whitespace before the colon of declarations (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-colon-space-before/
         */
        "declaration-colon-space-before": "never",

        /*
         * Require or disallow an empty line before declarations (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-empty-line-before/
         */
        "declaration-empty-line-before": [
            "never",
            {
                except: ["first-nested"]
            }
        ]

    }
};
