

/*
 * SCSS specific linting rules: @else
 *
 * https://github.com/kristerkari/stylelint-scss#-else
 */


export default {
    rules: {

        /*
         * Require or disallow a newline after the closing brace of @else statements (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",

        /*
         * Require a single space or disallow whitespace after the closing brace of @else statements (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-else-closing-brace-space-after": "always-intermediate",

        /*
         * Require an empty line or disallow empty lines before @-else (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-else-empty-line-before": null,

        /*
         * Require or disallow a space before @else if parentheses (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-else-if-parentheses-space-before": "always"

    }
};
