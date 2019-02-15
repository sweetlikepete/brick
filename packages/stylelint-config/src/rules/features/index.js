

export default {
    extends: [
        "./at-rule",
        "./color",
        "./comment",
        "./custom-media",
        "./custom-property",
        "./declaration-block",
        "./declaration",
        "./function",
        "./general",
        "./keyframes",
        "./media-feature",
        "./number",
        "./property",
        "./selector",
        "./shorthand-property",
        "./time",
        "./unit",
        "./value"
    ].map(require.resolve)
};
