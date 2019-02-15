

/*
 * SCSS specific linting rules.
 *
 * https://github.com/kristerkari/stylelint-scss
 */


export default {
    extends: [
        "./comment",
        "./declaration",
        "./else",
        "./extend",
        "./function",
        "./general",
        "./if",
        "./import",
        "./media-feature",
        "./mixin",
        "./operator",
        "./partial",
        "./placeholder",
        "./rule",
        "./selector",
        "./variable"
    ].map(require.resolve)
};
