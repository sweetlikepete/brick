

/*
 * Possible errors Property
 *
 * https://stylelint.io/user-guide/rules/#possible-errors
 */


export default {
    rules: {

        /*
         * Disallow unknown properties.
         *
         * https://stylelint.io/user-guide/rules/property-no-unknown/
         */
        "property-no-unknown": [
            true,
            {
                ignoreProperties: [
                    "box-align",
                    "box-pack",
                    "font-feature-settings",
                    "font-smoothing",
                    "tap-highlight-color",
                    "user-drag"
                ]
            }
        ]

    }
};

