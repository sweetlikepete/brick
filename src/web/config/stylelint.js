

const idPattern = "^[a-z0-9]+([-a-z0-9]+)*$";

const atRules = [
    "content",
    "each",
    "else",
    "font-face",
    "for",
    "function",
    "if",
    "import",
    "include",
    "keyframes",
    "media",
    "mixin",
    "page",
    "return",
    "while"
];


export default {
    plugins: [
        "stylelint-order",
        "stylelint-scss"
    ],
    rules: {
        "at-rule-blacklist": ["extend"],
        "at-rule-empty-line-before": ["always", {
            except: ["blockless-after-same-name-blockless"],
            ignore: ["after-comment"]
        }],
        "at-rule-name-case": "lower",
        "at-rule-name-newline-after": "always-multi-line",
        "at-rule-name-space-after": "always",
        "at-rule-no-unknown": [true, {
            ignoreAtRules: atRules
        }],
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": "always",
        "at-rule-semicolon-space-before": "never",
        "at-rule-whitelist": atRules,
        "block-closing-brace-empty-line-before": "always-multi-line",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",
        "block-closing-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-newline-before": "never-single-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always-single-line",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-hex": null,
        "color-no-invalid-hex": true,
        "comment-empty-line-before": "always",
        "comment-no-empty": true,
        "comment-whitespace-inside": "always",
        "comment-word-blacklist": ["jesus"],
        "custom-media-pattern": null,
        "custom-property-empty-line-before": "never",
        "custom-property-pattern": null,
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [
            "never", {
                except: ["first-nested"]
            }
        ],
        "declaration-no-important": null,
        "declaration-property-unit-blacklist": null,
        "declaration-property-unit-whitelist": null,
        "declaration-property-value-blacklist": null,
        "declaration-property-value-whitelist": null,
        "font-family-name-quotes": "always-unless-keyword",
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        "font-weight-notation": [
            "named-where-possible", {
                ignore: ["relative"]
            }
        ],
        "function-blacklist": null,
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-url-no-scheme-relative": null,
        "function-url-quotes": "always",
        "function-url-scheme-blacklist": null,
        "function-url-scheme-whitelist": [
            "data",
            "/^http/"
        ],
        "function-whitelist": null,
        "function-whitespace-after": "always",
        indentation: 4,
        "keyframe-declaration-no-important": true,
        "keyframes-name-pattern": idPattern,
        "length-zero-no-unit": true,
        linebreaks: "unix",
        "max-empty-lines": [1, {
            ignore: ["comments"]
        }],
        "max-line-length": 320,
        "max-nesting-depth": 12,
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-blacklist": null,
        "media-feature-name-case": "lower",
        "media-feature-name-no-unknown": true,
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-name-value-whitelist": null,
        "media-feature-name-whitelist": null,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-newline-before": "never-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never-single-line",
        "no-descending-specificity": null,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-first-line": false,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": null,
        "no-missing-end-of-source-newline": true,
        "no-unknown-animations": true,
        "number-leading-zero": "never",
        "number-max-precision": 8,
        "number-no-trailing-zeros": true,
        "order/order": [
            [
                "custom-properties",
                "declarations"
            ],
            {
                disableFix: true
            }
        ],
        "order/properties-alphabetical-order": true,
        "property-blacklist": null,
        "property-case": "lower",
        "property-no-unknown": [true, {
            ignoreProperties: [
                "box-align",
                "box-pack",
                "font-feature-settings",
                "font-smoothing",
                "tap-highlight-color",
                "user-drag"
            ]
        }],
        "property-no-vendor-prefix": true,
        "property-whitelist": null,
        "rule-empty-line-before": ["always", {
            ignore: ["after-comment"]
        }],
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "always",
        "scss/at-else-if-parentheses-space-before": "always",
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-function-named-arguments": true,
        "scss/at-function-parentheses-space-before": "never",
        "scss/at-function-pattern": idPattern,
        "scss/at-if-closing-brace-newline-after": "always-intermediate",
        "scss/at-if-closing-brace-space-after": "always-last-in-chain",
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-import-partial-extension-blacklist": null,
        "scss/at-import-partial-extension-whitelist": null,
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/at-mixin-named-arguments": null,
        "scss/at-mixin-parentheses-space-before": "never",
        "scss/at-mixin-pattern": idPattern,
        "scss/at-rule-no-unknown": true,
        "scss/declaration-nested-properties": null,
        "scss/declaration-nested-properties-no-divided-groups": null,
        "scss/dollar-variable-colon-newline-after": "always-multi-line",
        "scss/dollar-variable-colon-space-after": "always",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-default": null,
        "scss/dollar-variable-empty-line-before": ["always", {
            except: [
                "after-comment",
                "after-dollar-variable"
            ]
        }],
        "scss/dollar-variable-no-missing-interpolation": null,
        "scss/dollar-variable-pattern": idPattern,
        "scss/double-slash-comment-empty-line-before": null,
        "scss/double-slash-comment-inline": "never",
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/media-feature-value-dollar-variable": null,
        "scss/no-duplicate-dollar-variables": true,
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,
        "scss/partial-no-import": null,
        "scss/percent-placeholder-pattern": idPattern,
        "scss/selector-no-redundant-nesting-selector": true,
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-blacklist": null,
        "selector-attribute-operator-space-after": "always",
        "selector-attribute-operator-space-before": "always",
        "selector-attribute-operator-whitelist": null,
        "selector-attribute-quotes": "always",
        "selector-class-pattern": idPattern,
        "selector-combinator-blacklist": null,
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-combinator-whitelist": null,
        "selector-descendant-combinator-no-non-space": true,
        "selector-id-pattern": idPattern,
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before": "never-multi-line",
        "selector-list-comma-space-after": "always-single-line",
        "selector-list-comma-space-before": "never",
        "selector-max-attribute": 3,
        "selector-max-class": 10,
        "selector-max-combinators": 10,
        "selector-max-compound-selectors": 10,
        "selector-max-empty-lines": 0,
        "selector-max-id": 3,
        "selector-max-pseudo-class": 3,
        "selector-max-specificity": "3,8,8",
        "selector-max-type": 12,
        "selector-max-universal": 1,
        "selector-nested-pattern": null,
        "selector-no-qualifying-type": null,
        "selector-no-vendor-prefix": true,
        "selector-pseudo-class-blacklist": null,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-class-whitelist": null,
        "selector-pseudo-element-blacklist": null,
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "single",
        "selector-pseudo-element-no-unknown": true,
        "selector-pseudo-element-whitelist": null,
        "selector-type-case": "lower",
        "selector-type-no-unknown": [true, {
            ignore: ["custom-elements"],
            ignoreTypes: [
                "aside",
                "sidebar"
            ]
        }],
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "string-quotes": "double",
        "time-min-milliseconds": null,
        "unit-blacklist": null,
        "unit-case": "lower",
        "unit-no-unknown": true,
        "unit-whitelist": null,
        "value-keyword-case": "lower",
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never-single-line",
        "value-list-max-empty-lines": 0,
        "value-no-vendor-prefix": true
    }
};