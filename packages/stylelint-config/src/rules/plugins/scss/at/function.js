

/*
 * SCSS specific linting rules: @function
 *
 * https://github.com/kristerkari/stylelint-scss#-function
 */


import { idPattern } from "../../../../config";


export default {
    rules: {

        /*
         * Require named parameters in SCSS function call rule.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-function-named-arguments": "always",

        /*
         * Require or disallow a space before @function parentheses (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-function-parentheses-space-before": "never",

        /*
         * Specify a pattern for Sass/SCSS-like function names.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-function-pattern": idPattern

    }
};
