

/*
 * SCSS specific linting rules: @mixin
 *
 * https://github.com/kristerkari/stylelint-scss#-mixin
 */


import { idPattern } from "../../../../config";


export default {
    rules: {

        /*
         * Require or disallow parentheses in argumentless @mixin calls (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-mixin-argumentless-call-parentheses": "always",

        /*
         * Require named parameters in at-mixin call rule.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-mixin-named-arguments": null,

        /*
         * Require or disallow a space before @mixin parentheses (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-mixin-parentheses-space-before": "never",

        /*
         * Specify a pattern for Sass/SCSS-like mixin names.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/at-mixin-pattern": idPattern

    }
};
