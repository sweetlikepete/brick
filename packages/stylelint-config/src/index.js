

export default {
    extends: [
        "./rules/plugins/a11y",
        "./rules/plugins/declaration-block-no-ignored-properties",
        "./rules/plugins/declaration-strict-value",
        "./rules/plugins/high-performance-animation",
        "./rules/plugins/no-unsupported-browser-features",
        "./rules/plugins/order",
        "./rules/plugins/scss",
        "./rules/plugins/selector-tag-no-without-class",
        "./rules/plugins/use-nesting",
        "./rules/errors",
        "./rules/features",
        "./rules/style"
    ].map(require.resolve)
};
