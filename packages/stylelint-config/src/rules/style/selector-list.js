

/*
 * Stylistic issues Selector list
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require a newline or disallow whitespace after the commas of selector lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
         */
        "selector-list-comma-newline-after": "always",

        /*
         * Require a newline or disallow whitespace before the commas of selector lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/
         */
        "selector-list-comma-newline-before": "never-multi-line",

        /*
         * Require a single space or disallow whitespace after the commas of selector lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-list-comma-space-after/
         */
        "selector-list-comma-space-after": "always-single-line",

        /*
         * Require a single space or disallow whitespace before the commas of selector lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-list-comma-space-before/
         */
        "selector-list-comma-space-before": "never"

    }
};
