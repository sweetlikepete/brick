

/*
 * ESLint rules which disallow each ECMAScript syntax.
 *
 * https://mysticatea.github.io/eslint-plugin-es/
 */


export default {
    extends: [
        "./es5",
        "./es2015",
        "./es2016",
        "./es2017",
        "./es2018",
        "./es2019"
    ].map(require.resolve),
    plugins: ["es"]
};
