

/*
 * Linting of ES2015+ (ES6+) import/export syntax. Helps prevent issues with
 * misspelling of file paths and import names.
 *
 * https://www.npmjs.com/package/eslint-plugin-import
 */


export default {
    extends: [
        "./module-systems",
        "./static-analysis",
        "./style",
        "./warnings"
    ].map(require.resolve),
    plugins: ["import"],
    settings: {
        "import/resolver": {
            node: {
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    }
};
