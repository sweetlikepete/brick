

/*
 * Linting of ES2015+ (ES6+) import/export style issues. Helps prevent
 * issues with misspelling of file paths and import names.
 *
 * https://www.npmjs.com/package/eslint-plugin-import#style-guide
 */


export default {
    rules: {

        /*
         * Enforce a leading comment with the webpackChunkName for dynamic imports
         *
         * This is turned off for now because it doesn't work correctly. Says
         * that valid comments are invalid. Likely a bug in the plugin.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/dynamic-import-chunkname.md
         */
        "import/dynamic-import-chunkname": "off",

        /*
         * Ensure all exports appear after other statements
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
         */
        "import/exports-last": "error",

        /*
         * Ensure consistent use of file extension within the import path
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/extensions.md
         */
        "import/extensions": [
            "error",
            "never",
            {
                json: "always",
                scss: "always"
            }
        ],

        /*
         * Ensure all imports appear before other statements
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/first.md
         */
        "import/first": "error",

        /*
         * Prefer named exports to be grouped together in a single export declaration
         *
         * This is off for now because when you create anything that uses an interface
         * in Typescript, you have to export that interface otherwise you'll get an error
         * to the tune of:
         *
         * 'Default export of the module has or is using private name'
         *
         * As of the writing of this comment, you can't export your interface in the
         * group, because the typescript parser sees that as an undefined variable.
         * This means that the only option available is to export the interface and
         * members separately instead of in a group.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
         */
        "import/group-exports": "off",

        /*
         * Limit the maximum number of dependencies a module can have
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/max-dependencies.md
         */
        "import/max-dependencies": [
            "error",
            {
                max: 25
            }
        ],

        /*
         * Enforce a newline after import statements
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/newline-after-import.md
         */
        "import/newline-after-import": "error",

        /*
         * Forbid anonymous values as default exports
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md
         */
        "import/no-anonymous-default-export": [
            "error",
            {
                allowObject: true
            }
        ],

        /*
         * Forbid default exports
         *
         * Off for now because default exports are fine
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-default-export.md
         */
        "import/no-default-export": "off",

        /*
         * Report repeated import of the same module in multiple places
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
         */
        "import/no-duplicates": "error",

        /*
         * Forbid named default exports
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-default.md
         */
        "import/no-named-default": "error",

        /*
         * Forbid named exports
         *
         * Off for now because named exports are fine
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-export.md
         */
        "import/no-named-export": "off",

        /*
         * Report namespace imports
         *
         * Off for now because namespace imports are chilled
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md
         */
        "import/no-namespace": "off",

        /*
         * Forbid unassigned imports
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unassigned-import.md
         */
        "import/no-unassigned-import": [
            "error",
            {
                allow: [
                    "@babel/polyfill",
                    "@babel/register",
                    "**/*.scss",
                    "**/*.css"
                ]
            }
        ],

        /*
         * Enforce a convention in module import order
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/order.md
         */
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "sibling",
                    "parent",
                    "index"
                ],
                "newlines-between": "always"
            }
        ],

        /*
         * Prefer a default export if module exports a single name
         *
         * Off for now because we don't prefer this
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
         */
        "import/prefer-default-export": "off"

    }
};
