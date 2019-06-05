

/*
 * ESLint rule for enforcing consistent ES6 class member order.
 *
 * https://www.npmjs.com/package/eslint-plugin-sort-class-members
 */


export default {
    plugins: ["sort-class-members"],
    rules: {

        /*
         * Enforcing consistent ES6 class member order.
         *
         * https://www.npmjs.com/package/eslint-plugin-sort-class-members#usage
         */
        "sort-class-members/sort-class-members": [
            "error",
            {
                accessorPairPositioning: "getThenSet",
                order: [
                    "[static-properties]",
                    "[conventional-private-properties]",
                    "[properties]",
                    "constructor",
                    "[static-methods]",
                    "[conventional-private-methods]",
                    "[methods]"
                ]
            }
        ]

    }
};
