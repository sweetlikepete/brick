

/*
 * Stylistic issues Declaration block
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {


        /*
         * Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
         */
        "declaration-block-semicolon-newline-after": "always",


        /*
         * Require a newline or disallow whitespace before the semicolons of declaration blocks.
         *
         * https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/
         */
        "declaration-block-semicolon-newline-before": "never-multi-line",


        /*
         * Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/
         */
        "declaration-block-semicolon-space-after": "always-single-line",


        /*
         * Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
         */
        "declaration-block-semicolon-space-before": "never",


        /*
         * Require or disallow a trailing semicolon within declaration blocks (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
         */
        "declaration-block-trailing-semicolon": "always"


    }
};
