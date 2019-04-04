

/*
 * SCSS specific linting rules: Selector
 *
 * https://github.com/kristerkari/stylelint-scss#selector
 */


export default {
    rules: {

        /*
         * Require or disallow nesting of combinators in selectors.
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/selector-nest-combinators": null,

        /*
         * Disallow redundant nesting selectors (&).
         *
         * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules//README.md
         */
        "scss/selector-no-redundant-nesting-selector": true

    }
};
