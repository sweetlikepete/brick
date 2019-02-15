

/*
 * SCSS specific linting rules: %placeholder
 *
 * https://github.com/kristerkari/stylelint-scss#-placeholder
 */


import { idPattern } from "../../../config";


export default {
    rules: {

        /*
         * Specify a pattern for %-placeholders.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/percent-placeholder-pattern": idPattern

    }
};
