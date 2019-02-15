

export default {
    extends: [
        "./at-rule",
        "./block",
        "./color",
        "./comment",
        "./custom-property",
        "./declaration-block",
        "./declaration",
        "./font-family",
        "./font-weight",
        "./function",
        "./general",
        "./length",
        "./media-feature",
        "./media-query-list",
        "./number",
        "./property",
        "./rule",
        "./selector-list",
        "./selector",
        "./string",
        "./unit",
        "./value-list",
        "./value"
    ].map(require.resolve)
};
