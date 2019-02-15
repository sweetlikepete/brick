

/*
 * SCSS specific linting rules: General / Sheet
 *
 * https://github.com/kristerkari/stylelint-scss#general--sheet
 */


export default {
    rules: {

        /*
         * Disallow dollar variables within a stylesheet.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/no-dollar-variables": null,

        /*
         * Disallow duplicate dollar variables within a stylesheet.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/no-duplicate-dollar-variables": true

    }
};
