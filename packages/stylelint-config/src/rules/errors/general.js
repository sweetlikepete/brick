

/*
 * Possible errors General
 *
 * https://stylelint.io/user-guide/rules/#possible-errors
 */


export default {
    rules: {

        /*
         * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
         *
         * https://stylelint.io/user-guide/rules/no-descending-specificity/
         */
        "no-descending-specificity": null,

        /*
         * Disallow duplicate @import rules within a stylesheet.
         *
         * https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/
         */
        "no-duplicate-at-import-rules": true,

        /*
         * Disallow duplicate selectors.
         *
         * https://stylelint.io/user-guide/rules/no-duplicate-selectors/
         */
        "no-duplicate-selectors": true,

        /*
         * Disallow empty sources.
         *
         * https://stylelint.io/user-guide/rules/no-empty-source/
         */
        "no-empty-source": true,

        /*
         * Disallow extra semicolons (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/no-extra-semicolons/
         */
        "no-extra-semicolons": true,

        /*
         * Disallow double-slash comments (//...) which are not supported by CSS.
         *
         * https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/
         */
        "no-invalid-double-slash-comments": null

    }
};
