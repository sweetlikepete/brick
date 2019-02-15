

export default {
    extends: [
        "./rules/plugins/scss",
        "./rules/plugins/order",
        "./rules/errors",
        "./rules/features",
        "./rules/style"
    ].map(require.resolve),
    plugins: [
        "stylelint-order",
        "stylelint-scss"
    ]
};
