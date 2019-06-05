

/*
 * SCSS specific linting rules: @extend
 *
 * https://github.com/kristerkari/stylelint-scss#-extend
 */


export default {
    rules: {

        /*
         * Disallow at-extends (@extend) with missing placeholders.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-extend-no-missing-placeholder": true

    }
};
