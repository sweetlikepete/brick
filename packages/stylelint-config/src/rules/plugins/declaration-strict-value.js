

/*
 * A stylelint plugin that enforces either variables ($sass, @less, var(--cssnext)),
 * functions or custom CSS keywords (inherit, none, etc.) for property's values.
 *
 * https://www.npmjs.com/package/stylelint-declaration-strict-value
 */


export default {
    plugins: [
        "stylelint-declaration-strict-value"
    ],
    rules: {

        /*
         * A stylelint plugin that enforces either variables ($sass, @less, var(--cssnext)),
         * functions or custom CSS keywords (inherit, none, etc.) for property's values.
         *
         * https://www.npmjs.com/package/stylelint-declaration-strict-value#usage-1
         */
        "scale-unlimited/declaration-strict-value": [
            [
                "/color/",
                "fill",
                "stroke"
            ],
            {
                ignoreKeywords: {
                    "/color/": [
                        "currentColor",
                        "transparent",
                        "inherit"
                    ],
                    fill: [
                        "currentColor",
                        "inherit"
                    ],
                    stroke: "currentColor",
                    "z-index": 0
                }
            }
        ]

    }
};
