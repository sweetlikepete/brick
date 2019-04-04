

/*
 * A stylelint plugin to disallow certain tags without a class qualifier in selectors.
 *
 * https://www.npmjs.com/package/stylelint-selector-tag-no-without-class
 */


export default {
    plugins: [
        "stylelint-selector-tag-no-without-class"
    ],
    rules: {

        /*
         * A stylelint plugin to disallow certain tags without a class qualifier in selectors.
         *
         * https://www.npmjs.com/package/stylelint-selector-tag-no-without-class
         */
        "plugin/selector-tag-no-without-class": [
            "div",
            "span"
        ]

    }
};
