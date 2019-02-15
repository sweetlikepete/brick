

/*
 * Stylistic issues Media query list
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require a newline or disallow whitespace after the commas of media query lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/
         */
        "media-query-list-comma-newline-after": "always-multi-line",

        /*
         * Require a newline or disallow whitespace before the commas of media query lists.
         *
         * https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/
         */
        "media-query-list-comma-newline-before": "never-multi-line",

        /*
         * Require a single space or disallow whitespace after the commas of media query lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/
         */
        "media-query-list-comma-space-after": "always-single-line",

        /*
         * Require a single space or disallow whitespace before the commas of media query lists (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/
         */
        "media-query-list-comma-space-before": "never-single-line"

    }
};
