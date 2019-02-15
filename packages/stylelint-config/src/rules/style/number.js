

/*
 * Stylistic issues Number
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/number-leading-zero/
         */
        "number-leading-zero": "never",

        /*
         *  Disallow trailing zeros in numbers (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/number-no-trailing-zeros/
         */
        "number-no-trailing-zeros": true

    }
};
