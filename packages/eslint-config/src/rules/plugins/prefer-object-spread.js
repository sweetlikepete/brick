

/*
 * ESLint rule for suggesting that object spread properties be used instead of
 * Object.assign().
 *
 * https://www.npmjs.com/package/eslint-plugin-prefer-object-spread
 */


export default {
    plugins: ["prefer-object-spread"],
    rules: {

        /*
         * This rule suggests that object spread properties be used instead of
         * Object.assign(). The rule is only applied when Object.assign() is used
         * for cloning; not when it is used to extend an existing object. i.e.,
         * it applies when the first argument to Object.assign() is an object
         * literal. This is because spread properties only iterate over own properties.
         *
         * https://www.npmjs.com/package/eslint-plugin-prefer-object-spread#usage
         */
        "prefer-object-spread/prefer-object-spread": "error"

    }
};
