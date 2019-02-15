

/*
 * Stylistic issues Function
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require a newline or disallow whitespace after the commas of functions (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-comma-newline-after/
         */
        "function-comma-newline-after": "always-multi-line",

        /*
         * Require a newline or disallow whitespace before the commas of functions (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-comma-newline-before/
         */
        "function-comma-newline-before": "never-multi-line",

        /*
         * Require a single space or disallow whitespace after the commas of functions (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-comma-space-after/
         */
        "function-comma-space-after": "always",

        /*
         * Require a single space or disallow whitespace before the commas of functions (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-comma-space-before/
         */
        "function-comma-space-before": "never",

        /*
         * Limit the number of adjacent empty lines within functions (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-max-empty-lines/
         */
        "function-max-empty-lines": 0,

        /*
         * Specify lowercase or uppercase for function names (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-name-case/
         */
        "function-name-case": "lower",

        /*
         * Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/
         */
        "function-parentheses-newline-inside": "always-multi-line",

        /*
         * Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
         */
        "function-parentheses-space-inside": "never-single-line",

        /*
         * Require or disallow quotes for urls.
         *
         * https://stylelint.io/user-guide/rules/function-url-quotes/
         */
        "function-url-quotes": "always",

        /*
         * Require or disallow whitespace after functions (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/function-whitespace-after/
         */
        "function-whitespace-after": "always"

    }
};
