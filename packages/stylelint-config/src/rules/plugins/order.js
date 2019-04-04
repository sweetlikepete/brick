

/*
 * A plugin pack of order related linting rules for stylelint.
 *
 * https://github.com/hudochenkov/stylelint-order
 */


export default {
    plugins: [
        "stylelint-order"
    ],
    rules: {

        /*
         * Specify the order of content within declaration blocks.
         *
         * https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
         */
        "order/order": [
            [
                "custom-properties",
                "declarations"
            ],
            {
                disableFix: true
            }
        ],

        /*
         * Specify the order of properties within declaration blocks.
         *
         * https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
         */
        "order/properties-alphabetical-order": true,

        /*
         * Specify the alphabetical order of properties within declaration blocks.
         *
         * https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
         */
        "order/properties-order": null

    }
};
