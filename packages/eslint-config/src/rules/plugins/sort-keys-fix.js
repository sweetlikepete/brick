

/*
 * Fork of eslint rule that sorts keys in objects
 * (https://eslint.org/docs/rules/sort-keys) with autofix enabled
 *
 * https://www.npmjs.com/package/eslint-plugin-sort-keys-fix
 */


export default {
    plugins: ["sort-keys-fix"],
    rules: {

        /*
         * https://eslint.org/docs/rules/sort-keys with autofix
         *
         * https://www.npmjs.com/package/eslint-plugin-sort-keys-fix#rule-configuration
         */
        "sort-keys-fix/sort-keys-fix": [
            "error",
            "asc",
            {
                caseSensitive: false
            }
        ]

    }
};
