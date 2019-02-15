

/*
 * Stylistic issues Value list
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require a newline or disallow whitespace after the commas of value lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/value-list-comma-newline-after/
         */
        "value-list-comma-newline-after": "always-multi-line",

        /*
         * Require a newline or disallow whitespace before the commas of value lists.
         *
         * https://stylelint.io/user-guide/rules/value-list-comma-newline-before/
         */
        "value-list-comma-newline-before": "never-multi-line",

        /*
         * Require a single space or disallow whitespace after the commas of value lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/value-list-comma-space-after/
         */
        "value-list-comma-space-after": "always-single-line",

        /*
         * Require a single space or disallow whitespace before the commas of value lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/value-list-comma-space-before/
         */
        "value-list-comma-space-before": "never-single-line",

        /*
         * Limit the number of adjacent empty lines within value lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/value-list-max-empty-lines/
         */
        "value-list-max-empty-lines": 0

    }
};
