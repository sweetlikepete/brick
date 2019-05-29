

/*
 * Linting of ES2015+ (ES6+) import/export syntax. Helps prevent issues with
 * misspelling of file paths and import names.
 *
 * https://www.npmjs.com/package/eslint-plugin-import#static-analysis
 */


export default {
    rules: {

        /*
         * Ensure a default export is present, given a default import.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
         */
        "import/default": "error",

        /*
         * Ensure named imports correspond to a named export in the remote file.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md
         */
        "import/named": "error",

        /*
         * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
         */
        "import/namespace": "error",

        /*
         * Forbid import of modules using absolute paths
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md
         */
        "import/no-absolute-path": "error",

        /*
         * Forbid a module from importing a module with a dependency path back to itself
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md
         */
        "import/no-cycle": "error",

        /*
         * Forbid require() calls with expressions
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
         */
        "import/no-dynamic-require": "error",

        /*
         * Prevent importing the submodules of other modules
         *
         * Off for now because organizing internal modules in parent modules makes sense to me
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-internal-modules.md
         */
        "import/no-internal-modules": "off",

        /*
         * Forbid importing modules from parent directories
         *
         * Off for now because doing something like a utils collection would become impossible
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-relative-parent-imports.md
         */
        "import/no-relative-parent-imports": "off",

        /*
         * Restrict which files can be imported in a given folder
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-restricted-paths.md
         */
        "import/no-restricted-paths": "error",

        /*
         * Forbid a module from importing itself
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md
         */
        "import/no-self-import": "error",

        /*
         * Ensure imports point to a file/module that can be resolved.
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md
         */
        "import/no-unresolved": "error",

        /*
         * Forbid modules without any export, and exports not imported by any modules
         *
         * Off because it doesn't currently support dynamic imports
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
         */
        "import/no-unused-modules": "off",

        /*
         * Prevent unnecessary path segments in import and require statements
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-useless-path-segments.md
         */
        "import/no-useless-path-segments": "error",

        /*
         * Forbid webpack loader syntax in imports
         *
         * https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-webpack-loader-syntax.md
         */
        "import/no-webpack-loader-syntax": "error"

    }
};
