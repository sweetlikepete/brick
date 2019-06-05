

/*
 * SCSS specific linting rules: @each
 *
 * https://github.com/kristerkari/stylelint-scss#-each
 */


export default {
    rules: {

        /*
         * This is a rule that checks for situations where users have done a loop using map-keys and grabbed the value for that key inside of the loop.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line/README.md
         */
        "scss/at-each-key-value-single-line": true

    }
};
