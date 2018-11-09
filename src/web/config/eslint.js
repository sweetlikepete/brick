
/*
 *  Sorting keys would make this configuration hard to navigate. Magic numbers are self-explanatory
 *  in this context. This module is injested directly by eslint so it needs to use the old commonjs
 *  module structure (which also makes it ambiguous).
 */
/* eslint-disable sort-keys, no-magic-numbers, import/unambiguous, import/no-commonjs */


const extensions = [
    ".js",
    ".jsx",
    ".json",
    ".ts",
    ".tsx",
    ".ico",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif"
];


module.exports = {

    extends: [
        "eslint:recommended",
        "plugin:array-func/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:node/recommended",
        "plugin:promise/recommended"
    ],

    globals: {
        __dirname: false,
        __filename: false,
        Buffer: false,
        FB: false,
        ga: false,
        global: false,
        google: false,
        module: false,
        Modernizr: false,
        process: false,
        Promise: false,
        require: false,
        System: false,
        Uint8Array: false
    },

    parser: "babel-eslint",

    parserOptions: {
        allowImportExportEverywhere: true,
        ecmaVersion: 6,
        sourceType: "module"
    },

    plugins: [
        "array-func",
        "eslint-comments",
        "json",
        "import",
        "node",
        "no-loops",
        "promise",
        "react",
        "unicorn"
    ],

    env: {
        browser: true
    },

    settings: {
        react: {
            version: "latest"
        }
    },

    rules: {

        // Plugin: array-func

        "array-func/from-map": 2,
        "array-func/no-unnecessary-this-arg": 2,
        "array-func/prefer-array-from": 0,

        // Plugin: eslint-comments

        "eslint-comments/disable-enable-pair": 2,
        "eslint-comments/no-aggregating-enable": 2,
        "eslint-comments/no-duplicate-disable": 0,
        "eslint-comments/no-restricted-disable": 2,
        "eslint-comments/no-unlimited-disable": 2,
        "eslint-comments/no-unused-disable": 2,
        "eslint-comments/no-unused-enable": 2,
        "eslint-comments/no-use": 0,

        // Plugin: import

        "import/default": 2,
        "import/dynamic-import-chunkname": 2,
        "import/export": 2,
        "import/exports-last": 2,
        "import/extensions": 2,
        "import/first": 2,
        "import/group-exports": 2,
        "import/max-dependencies": [2, {
            max: 25
        }],
        "import/named": 2,
        "import/namespace": 2,
        "import/newline-after-import": 2,
        "import/no-absolute-path": 2,
        "import/no-amd": 2,
        "import/no-anonymous-default-export": [2, {
            allowObject: true
        }],
        "import/no-commonjs": 2,
        "import/no-cycle": 2,
        "import/no-default-export": 0,
        "import/no-deprecated": 2,
        "import/no-duplicates": 2,
        "import/no-dynamic-require": 2,
        "import/no-extraneous-dependencies": 2,
        "import/no-internal-modules": 0,
        "import/no-mutable-exports": 2,
        "import/no-named-as-default": 2,
        "import/no-named-as-default-member": 2,
        "import/no-named-default": 2,
        "import/no-namespace": 0,
        "import/no-nodejs-modules": 0,
        "import/no-relative-parent-imports": 0,
        "import/no-restricted-paths": 2,
        "import/no-self-import": 2,
        "import/no-unassigned-import": 2,
        "import/no-unresolved": 0,
        "import/no-useless-path-segments": 2,
        "import/no-webpack-loader-syntax": 2,

        "import/order": 0,
        "import/prefer-default-export": 0,
        "import/unambiguous": 2,

        // Plugin: node

        "node/no-extraneous-import": 2,
        "node/no-extraneous-require": 0,
        "node/no-missing-import": [2, {
            resolvePaths: [process.cwd()],
            tryExtensions: extensions
        }],
        "node/no-missing-require": [2, {
            resolvePaths: [process.cwd()],
            tryExtensions: extensions
        }],
        "node/no-unpublished-bin": 2,
        "node/no-unpublished-import": 0,
        "node/no-unpublished-require": 0,
        "node/no-unsupported-features/es-syntax": [2, {
            ignores: [
                "modules"
            ]
        }],
        "node/process-exit-as-throw": 2,
        "node/shebang": 2,

        // Plugin: no-loops

        "no-loops/no-loops": 2,

        // Plugin: promise

        "promise/always-return": 0,
        "promise/avoid-new": 0,
        "promise/catch-or-return": 2,
        "promise/no-callback-in-promise": 0,
        "promise/no-native": 0,
        "promise/no-nesting": 2,
        "promise/no-new-statics": 2,
        "promise/no-promise-in-callback": 0,
        "promise/no-return-in-finally": 2,
        "promise/no-return-wrap": 2,
        "promise/param-names": 2,
        "promise/prefer-await-to-callbacks": 0,
        "promise/prefer-await-to-then": 0,
        "promise/valid-params": 2,

        // Plugin: react

        "react/boolean-prop-naming": 2,
        "react/button-has-type": 2,
        "react/default-props-match-prop-types": 2,
        "react/destructuring-assignment": [2, "never"],
        "react/display-name": 2,
        "react/forbid-component-props": 2,
        "react/forbid-dom-props": 2,
        "react/forbid-elements": 2,
        "react/forbid-foreign-prop-types": 2,
        "react/forbid-prop-types": 2,
        "react/no-access-state-in-setstate": 2,
        "react/no-array-index-key": 2,
        "react/no-children-prop": 2,
        "react/no-danger": 2,
        "react/no-danger-with-children": 2,
        "react/no-deprecated": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-find-dom-node": 2,
        "react/no-is-mounted": 2,
        "react/no-multi-comp": 2,
        "react/no-redundant-should-component-update": 2,
        "react/no-render-return-value": 2,
        "react/no-set-state": 2,
        "react/no-string-refs": 2,
        "react/no-this-in-sfc": 2,
        "react/no-typos": 2,
        "react/no-unescaped-entities": 2,
        "react/no-unknown-property": 2,
        "react/no-unused-prop-types": 2,
        "react/no-unsafe": 2,
        "react/no-unused-state": 2,
        "react/no-will-update-set-state": 2,
        "react/prefer-es6-class": 2,
        "react/prefer-stateless-function": [2, {
            ignorePureComponents: true
        }],
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 2,
        "react/require-default-props": 2,
        "react/require-optimization": 2,
        "react/require-render-return": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": 2,
        "react/sort-prop-types": 2,
        "react/style-prop-object": 2,
        "react/void-dom-elements-no-children": 2,

        "react/jsx-boolean-value": 2,
        "react/jsx-child-element-spacing": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-closing-tag-location": 2,
        "react/jsx-curly-brace-presence": 2,
        "react/jsx-curly-spacing": [2, {
            when: "always"
        }],
        "react/jsx-equals-spacing": 2,
        "react/jsx-filename-extension": 0,
        "react/jsx-first-prop-new-line": 2,
        "react/jsx-handler-names": 2,
        "react/jsx-indent": 2,
        "react/jsx-indent-props": 2,
        "react/jsx-key": 2,
        "react/jsx-max-depth": [2, {
            max: 10
        }],
        "react/jsx-max-props-per-line": [2, {
            maximum: 2
        }],
        "react/jsx-no-bind": 2,
        "react/jsx-no-comment-textnodes": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-literals": 0,
        "react/jsx-no-target-blank": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-pascal-case": 2,
        "react/jsx-props-no-multi-spaces": 2,
        "react/jsx-sort-default-props": 2,
        "react/jsx-sort-props": 2,
        "react/jsx-tag-spacing": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-wrap-multilines": 2,

        // Plugin: unicorn

        "unicorn/catch-error-name": [2, {
            name: "err"
        }],
        "unicorn/explicit-length-check": 2,
        "unicorn/filename-case": 0,
        "unicorn/no-abusive-eslint-disable": 0,
        // Taken care of by no-process-exit
        "unicorn/no-process-exit": 0,
        "unicorn/throw-new-error": 2,
        "unicorn/number-literal-case": 2,
        "unicorn/escape-case": 2,
        "unicorn/no-array-instanceof": 2,
        "unicorn/no-new-buffer": 2,
        "unicorn/no-hex-escape": 2,
        "unicorn/custom-error-definition": 2,
        "unicorn/prefer-exponentiation-operator": 2,
        "unicorn/prefer-starts-ends-with": 2,
        "unicorn/prefer-type-error": 2,
        "unicorn/no-fn-reference-in-iterator": 0,
        "unicorn/import-index": 2,
        "unicorn/new-for-builtins": 2,
        "unicorn/regex-shorthand": 2,
        "unicorn/prefer-spread": 2,
        "unicorn/error-message": 2,
        // Taken care of by security/detect-unsafe-regex
        "unicorn/no-unsafe-regex": 0,
        "unicorn/prefer-add-event-listener": 2,

        // Possible Errors

        "for-direction": 2,
        "getter-return": 2,
        "no-await-in-loop": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": 2,
        "no-console": 0,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [2, "all", {
            ignoreJSX: "multi-line"
        }],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-obj-calls": 2,
        "no-prototype-builtins": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-template-curly-in-string": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "use-isnan": 2,
        "valid-jsdoc": 2,
        "valid-typeof": 2,

        // Best Practices

        "accessor-pairs": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "class-methods-use-this": 0,
        complexity: [2, {
            max: 20
        }],
        "consistent-return": 2,
        curly: 2,
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        eqeqeq: 2,
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-empty-function": 0,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-global-assign": 2,
        "no-implicit-coercion": 2,
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 0,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": [2, {
            detectObjects: false,
            ignore: [
                -1,
                0,
                1,
                2,
                100,
                -100,
                200,
                301,
                302,
                404,
                500,
                1000
            ],
            ignoreArrayIndexes: true
        }],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-restricted-properties": 2,
        "no-return-assign": 2,
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-useless-return": 2,
        "no-void": 2,
        "no-warning-comments": 2,
        "no-with": 2,
        "prefer-promise-reject-errors": 2,
        radix: 2,
        "require-await": 2,
        "vars-on-top": 2,
        "wrap-iife": 2,
        yoda: 2,

        // Strict Mode

        strict: [2, "never"],

        // Variables

        "init-declarations": 2,
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-restricted-globals": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-unused-vars": [2, {
            varsIgnorePattern: "h"
        }],
        "no-use-before-define": 2,

        // Node.js and CommonJS

        "callback-return": 0,
        "global-require": 0,
        "handle-callback-err": 2,
        "no-buffer-constructor": 2,
        "no-mixed-requires": 2,
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-restricted-modules": 2,
        "no-sync": 2,

        // Stylistic Issues

        "array-bracket-newline": 0,
        "array-bracket-spacing": 2,
        "array-element-newline": 0,
        "block-spacing": 2,
        "brace-style": 2,
        camelcase: 2,
        "capitalized-comments": [2, "always", {
            ignoreConsecutiveComments: true,
            ignorePattern: "webpackChunkName"
        }],
        "comma-dangle": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-this": [2, "self"],
        "eol-last": 2,
        "func-call-spacing": 2,
        "func-name-matching": 2,
        "func-names": [2, "as-needed"],
        "func-style": 2,
        "function-paren-newline": [2, "consistent"],
        "id-blacklist": [2, "e", "i", "j"],
        "id-length": 0,
        "id-match": 2,
        "implicit-arrow-linebreak": 2,
        indent: [2, 4, {
            MemberExpression: 0,
            SwitchCase: 1
        }],
        "jsx-quotes": 2,
        "key-spacing": [2, {
            afterColon: true,
            beforeColon: false,
            mode: "strict"
        }],
        "keyword-spacing": [2, {
            after: false,
            before: false,
            overrides: {
                as: {
                    after: true,
                    before: true
                },
                case: {
                    after: true
                },
                class: {
                    after: true
                },
                const: {
                    after: true
                },
                export: {
                    after: true
                },
                import: {
                    after: true
                },
                let: {
                    after: true
                },
                return: {
                    after: true
                },
                this: {
                    before: true
                },
                from: {
                    after: true,
                    before: true
                }
            }
        }],
        "line-comment-position": 2,
        "linebreak-style": 2,
        "lines-around-comment": 2,
        "lines-between-class-members": 2,
        "max-depth": 2,
        "max-len": [2, {
            code: 160
        }],
        "max-lines": [2, {
            max: 1000
        }],
        "max-nested-callbacks": 2,
        "max-params": [2, {
            max: 5
        }],
        "max-statements": [2, {
            max: 40
        }],
        "max-statements-per-line": 2,
        "multiline-comment-style": 2,
        "multiline-ternary": [2, "never"],
        "new-cap": [2, {
            properties: false
        }],
        "new-parens": 2,
        "newline-per-chained-call": [2, {
            ignoreChainWithDepth: 3
        }],
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-continue": 2,
        "no-inline-comments": 2,
        "no-lonely-if": 2,
        "no-mixed-operators": 0,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-assign": 2,
        "no-multiple-empty-lines": 2,
        "no-negated-condition": 0,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": [2, {
            allowForLoopAfterthoughts: true
        }],
        "no-restricted-syntax": 2,
        "no-tabs": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 2,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "nonblock-statement-body-position": 2,
        "object-curly-newline": [0, {
            consistent: true,
            minProperties: 2,
            multiline: true
        }],
        "object-curly-spacing": [2, "always"],
        "object-property-newline": 2,
        "one-var": [2, "never"],
        "one-var-declaration-per-line": 2,
        "operator-assignment": 2,
        "operator-linebreak": 2,
        "padded-blocks": [2, {
            classes: "always",
            switches: "always"
        }],
        "padding-line-between-statements": [2, {
            blankLine: "always",
            prev: [
                "return",
                "directive",
                "multiline-block-like"
            ],
            next: [
                "return",
                "directive",
                "multiline-block-like",
                "const",
                "let",
                "var"
            ]
        }],
        "quote-props": [2, "as-needed"],
        quotes: 2,
        "require-jsdoc": [0, {
            require: {
                ArrowFunctionExpression: false,
                ClassDeclaration: true,
                FunctionDeclaration: true,
                MethodDefinition: true
            }
        }],
        semi: 2,
        "semi-spacing": 2,
        "semi-style": [2, "last"],
        "sort-keys": [2, "asc", {
            caseSensitive: false
        }],
        "sort-vars": 2,
        "space-before-blocks": [2, {
            classes: "never",
            functions: "never",
            keywords: "never"
        }],
        "space-before-function-paren": [2, {
            anonymous: "never",
            asyncArrow: "always",
            named: "never"
        }],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "spaced-comment": 2,
        "switch-colon-spacing": [2, {
            after: false,
            before: true
        }],
        "template-tag-spacing": 2,
        "unicode-bom": 2,
        "wrap-regex": 2,

        // ECMAScript 6

        "arrow-body-style": 2,
        "arrow-parens": 2,
        "arrow-spacing": 2,
        "constructor-super": 2,
        "generator-star-spacing": 2,
        "no-class-assign": 2,
        "no-confusing-arrow": 0,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-new-symbol": 2,
        "no-restricted-imports": 2,
        "no-this-before-super": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-rename": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-destructuring": [2, {
            array: true,
            object: false
        }],
        "prefer-numeric-literals": 2,
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,
        "rest-spread-spacing": 2,
        "sort-imports": [2, {
            ignoreCase: true
        }],
        "symbol-description": 2,
        "template-curly-spacing": [2, "always"],
        "yield-star-spacing": 2
    }

};

/* eslint-enable sort-keys, no-magic-numbers, import/unambiguous, import/no-commonjs */
