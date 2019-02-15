

/*
 * Linting of ES2015+ (ES6+) import/export syntax. Helps prevent issues with
 * misspelling of file paths and import names.
 *
 * https://www.npmjs.com/package/eslint-plugin-import#helpful-warnings
 */


export default {
    rules: {

        /*
         * Report any invalid exports, i.e. re-export of the same name
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/export.md
         */
        "import/export": "error",

        /*
         * Report imported names marked with @deprecated documentation tag
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md
         */
        "import/no-deprecated": "error",

        /*
         * Forbid the use of extraneous packages
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md
         */
        "import/no-extraneous-dependencies": "error",

        /*
         * Forbid the use of mutable exports with var or let.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md
         */
        "import/no-mutable-exports": "error",

        /*
         * Report use of exported name as identifier of default export
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md
         */
        "import/no-named-as-default": "error",

        /*
         * Report use of exported name as property of default export
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
         */
        "import/no-named-as-default-member": "error"

    }
};
