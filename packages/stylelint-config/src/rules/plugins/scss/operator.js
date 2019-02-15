

/*
 * SCSS specific linting rules: Operator
 *
 * https://github.com/kristerkari/stylelint-scss#operator
 */


export default {
    rules: {

        /*
         * Disallow linebreaks after Sass operators.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/operator-no-newline-after": true,

        /*
         * Disallow linebreaks before Sass operators.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/operator-no-newline-before": true,

        /*
         * Disallow unspaced operators in Sass operations.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/operator-no-unspaced": true

    }
};
