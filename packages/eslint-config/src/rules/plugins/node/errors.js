

/*
 * Additional ESLint's possible error rules for Node.js
 *
 * https://github.com/mysticatea/eslint-plugin-node#possible-errors
 */


const resolvePaths = [process.cwd()];

const tryExtensions = [
    ".js",
    ".jsx",
    ".mjs",
    ".json",
    ".ts",
    ".tsx",
    ".scss",
    ".ico",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif"
];


export default {
    rules: {

        /*
         * Disallow import declarations of extraneous packages
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
         */
        "node/no-extraneous-import": "error",

        /*
         * Disallow require() expressions of extraneous packages
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
         */
        "node/no-extraneous-require": "error",

        /*
         * Disallow import declarations of missing files
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
         */
        "node/no-missing-import": [
            "error",
            {
                resolvePaths,
                tryExtensions
            }
        ],

        /*
         * Disallow require() expressions of missing files
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
         */
        "node/no-missing-require": [
            "error",
            {
                resolvePaths,
                tryExtensions
            }
        ],

        /*
         * Disallow 'bin' files which are ignored by npm
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
         */
        "node/no-unpublished-bin": "error",

        /*
         * Disallow import declarations of private things
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
         */
        "node/no-unpublished-import": "error",

        /*
         * Disallow require() expressions of private things
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
         */
        "node/no-unpublished-require": "error",

        /*
         * Disallow unsupported ECMAScript built-ins on the specified version
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
         */
        "node/no-unsupported-features/es-builtins": "error",

        /*
         * Disallow unsupported ECMAScript syntax on the specified version
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
         */
        "node/no-unsupported-features/es-syntax": [
            "error",
            {
                ignores: ["modules"],
                version: ">= 10.15.1"
            }
        ],

        /*
         * Disallow unsupported Node.js built-in APIs on the specified version
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
         */
        "node/no-unsupported-features/node-builtins": "error",

        /*
         * Make process.exit() expressions the same code path as throw
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
         */
        "node/process-exit-as-throw": "error",

        /*
         * Enforce the correct usage of shebang
         *
         * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
         */
        "node/shebang": "error"

    }
};
