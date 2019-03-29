

/*
 * This plugin intends to help you in tracking down problems when you are using
 * css-modules. It tells if you are using a non-existent css/scss/less class in
 * js or if you forgot to use some classes which you declared in css/scss/less.
 *
 * https://www.npmjs.com/package/eslint-plugin-css-modules
 */


export default {
    plugins: ["css-modules"],
    rules: {

        /*
         * You must not use a non existing class, or a property that hasn't been
         * exported using the :export keyword.
         *
         * https://www.npmjs.com/package/eslint-plugin-css-modules#rules
         */
        "css-modules/no-undef-class": [
            "error",
            {
                camelCase: true
            }
        ],

        /*
         * You must use all the classes defined in css/scss/less file.
         *
         * https://www.npmjs.com/package/eslint-plugin-css-modules#rules
         */
        "css-modules/no-unused-class": [
            "error",
            {
                camelCase: true
            }
        ]

    },
    settings: {
        "css-modules": {
            basePath: "src"
        }
    }
};
