

export default {
    env: {
        browser: true,
        node: true
    },
    extends: [
        "../rules/plugins/array-func",
        "../rules/plugins/compat",
        "../rules/plugins/eslint-comments",
        "../rules/plugins/import",
        "../rules/plugins/no-loops",
        "../rules/plugins/node",
        "../rules/plugins/optimize-regex",
        "../rules/plugins/promise",
        "../rules/plugins/react",
        "../rules/plugins/security",
        "../rules/plugins/unicorn",
        "../rules/best-practices",
        "../rules/errors",
        "../rules/es6",
        "../rules/node",
        "../rules/strict",
        "../rules/style",
        "../rules/variables"
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    }
};
