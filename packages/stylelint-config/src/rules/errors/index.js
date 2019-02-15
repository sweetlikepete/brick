

export default {
    extends: [
        "./at-rule",
        "./block",
        "./color",
        "./comment",
        "./declaration-block",
        "./font-family",
        "./function",
        "./general",
        "./keyframe-declaration",
        "./media-feature",
        "./property",
        "./selector",
        "./string",
        "./unit"
    ].map(require.resolve)
};
