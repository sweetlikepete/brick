

/*
 * Additional ESLint rules for ESLint directive comments
 * (e.g. //eslint-disable-line).
 *
 * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
 */


export default {
    extends: [
        "./best-practices",
        "./style"
    ].map(require.resolve),
    plugins: ["eslint-comments"]
};
