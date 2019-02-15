

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
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/dynamic-import-chunkname.md
         */
        "import/dynamic-import-chunkname": [
            "error",
            {
                importFunctions: ["dynamicImport"],
                webpackChunknameFormat: "[a-zA-Z0-57-9-/_]"
            }
        ],

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
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
         */
        "import/group-exports": "error",

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
        "import/no-unassigned-import": "error",

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
