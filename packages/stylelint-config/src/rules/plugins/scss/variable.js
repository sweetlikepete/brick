

/*
 * SCSS specific linting rules: $variable
 *
 * https://github.com/kristerkari/stylelint-scss#-variable
 */


import { idPattern } from "../../../config";


export default {
    rules: {

        /*
         * Require a newline after the colon in $-variable declarations (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/dollar-variable-colon-newline-after": "always-multi-line",

        /*
         * Require or disallow whitespace after the colon in $-variable declarations (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/dollar-variable-colon-space-after": "always",

        /*
         * Require a single space or disallow whitespace before the colon in $-variable declarations (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/dollar-variable-colon-space-before": "never",

        /*
         * Require !default flag for $-variable declarations.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/dollar-variable-default": null,

        /*
         * Require a single empty line or disallow empty lines before $-variable declarations (Autofixable).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/dollar-variable-empty-line-before": [
            "always",
            {
                except: [
                    "after-comment",
                    "after-dollar-variable"
                ]
            }
        ],

        /*
         * Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/dollar-variable-no-missing-interpolation": null,

        /*
         * Specify a pattern for Sass-like variables.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/dollar-variable-pattern": idPattern

    }
};
