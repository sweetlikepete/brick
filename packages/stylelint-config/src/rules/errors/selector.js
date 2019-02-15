

/*
 * Possible errors Selector
 *
 * https://stylelint.io/user-guide/rules/#possible-errors
 */


export default {
    rules: {

        /*
         * Disallow unknown pseudo-class selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
         */
        "selector-pseudo-class-no-unknown": true,

        /*
         * Disallow unknown pseudo-element selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
         */
        "selector-pseudo-element-no-unknown": true,

        /*
         * Disallow unknown type selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-type-no-unknown/
         */
        "selector-type-no-unknown": [
            true,
            {
                ignore: ["custom-elements"],
                ignoreTypes: [
                    "aside",
                    "sidebar"
                ]
            }
        ]

    }
};
