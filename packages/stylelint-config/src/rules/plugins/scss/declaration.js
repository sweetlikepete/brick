

/*
 * SCSS specific linting rules: Declaration
 *
 * https://github.com/kristerkari/stylelint-scss#declaration
 */


export default {
    rules: {

        /*
         * Require or disallow properties with - in their names to be in a form of a nested group.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/declaration-nested-properties": null,

        /*
         * Disallow nested properties of the same "namespace" be divided into multiple groups.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/declaration-nested-properties-no-divided-groups": null

    }
};
