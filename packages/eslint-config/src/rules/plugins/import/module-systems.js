

/*
 * Linting of ES2015+ (ES6+) import/export module systems syntax. Helps prevent
 * issues with misspelling of file paths and import names.
 *
 * https://www.npmjs.com/package/eslint-plugin-import#module-systems
 */


export default {
    rules: {

        /*
         * Report AMD require and define calls.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-amd.md
         */
        "import/no-amd": "error",

        /*
         * Report CommonJS require calls and module.exports or exports.*.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
         */
        "import/no-commonjs": "error",

        /*
         * No Node.js builtin modules.
         *
         * Off for now since we're assuming that most code is nodejs code
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-nodejs-modules.md
         */
        "import/no-nodejs-modules": "off",

        /*
         * Report potentially ambiguous parse goal (script vs. module)
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/unambiguous.md
         */
        "import/unambiguous": "error"

    }
};
