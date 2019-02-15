

/*
 * SCSS specific linting rules: @rule
 *
 * https://github.com/kristerkari/stylelint-scss#-rule
 */


export default {
    rules: {

        /*
         * Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-rule-no-unknown": true

    }
};
