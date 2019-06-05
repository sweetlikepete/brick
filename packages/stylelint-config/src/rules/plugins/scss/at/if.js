

/*
 * SCSS specific linting rules: @if
 *
 * https://github.com/kristerkari/stylelint-scss#-if
 */


export default {
    rules: {

        /*
         * Require or disallow a newline after the closing brace of @if statements (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",

        /*
         * Require a single space or disallow whitespace after the closing brace of @if statements (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-if-closing-brace-space-after": "always-intermediate"

    }
};
