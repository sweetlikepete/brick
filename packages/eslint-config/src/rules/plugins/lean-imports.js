

/*
 * Make sure your imports only import the bits you need
 *
 * https://www.npmjs.com/package/eslint-plugin-lean-imports
 */


export default {
    plugins: ["lean-imports"],
    rules: {

        /*
         * When building browser tools you want to keep the bundles as small as
         * possible. A lot of client side libraries offer you to take a dependency
         * on the whole package or import modules directly (eg: lodash, react-bootstrap).
         *
         * https://github.com/eslint-plugins/eslint-plugin-lean-imports/blob/HEAD/docs/rules/import.md
         */
        "lean-imports/import": [
            "error",
            [
                "lodash",
                "react",
                "react-bootstrap"
            ]
        ]

    }
};
