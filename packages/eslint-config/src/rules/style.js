

/*
 * These rules relate to style guidelines, and are therefore quite subjective
 *
 * https://eslint.org/docs/rules/#stylistic-issues
 */


import {
    indentSpaces,
    maximumFileLineCount,
    maximumLineLength
} from "../settings";


export default {
    rules: {

        /*
         * Enforce linebreaks after opening and before closing array brackets
         *
         * https://eslint.org/docs/rules/array-bracket-newline
         */
        "array-bracket-newline": [
            "error",
            "consistent"
        ],

        /*
         * Enforce consistent spacing inside array brackets
         *
         * https://eslint.org/docs/rules/array-bracket-spacing
         */
        "array-bracket-spacing": "error",

        /*
         * Enforce line breaks after each array element
         *
         * https://eslint.org/docs/rules/array-element-newline
         */
        "array-element-newline": [
            "error",
            "consistent"
        ],

        /*
         * Disallow or enforce spaces inside of blocks after opening block and
         * before closing block
         *
         * https://eslint.org/docs/rules/block-spacing
         */
        "block-spacing": "error",

        /*
         * Enforce consistent brace style for blocks
         *
         * https://eslint.org/docs/rules/brace-style
         */
        "brace-style": "error",

        /*
         * Enforce camelcase naming convention
         *
         * https://eslint.org/docs/rules/camelcase
         */
        camelcase: "error",

        /*
         * Enforce or disallow capitalization of the first letter of a comment
         *
         * https://eslint.org/docs/rules/capitalized-comments
         */
        "capitalized-comments": [
            "error",
            "always",
            {
                ignoreConsecutiveComments: true,
                ignorePattern: "webpackChunkName|http|https"
            }
        ],

        /*
         * Require or disallow trailing commas
         *
         * https://eslint.org/docs/rules/comma-dangle
         */
        "comma-dangle": "error",

        /*
         * Enforce consistent spacing before and after commas
         *
         * https://eslint.org/docs/rules/comma-spacing
         */
        "comma-spacing": "error",

        /*
         * Enforce consistent comma style
         *
         * https://eslint.org/docs/rules/comma-style
         */
        "comma-style": "error",

        /*
         * Enforce consistent spacing inside computed property brackets
         *
         * https://eslint.org/docs/rules/computed-property-spacing
         */
        "computed-property-spacing": "error",

        /*
         * Enforce consistent naming when capturing the current execution context
         *
         * https://eslint.org/docs/rules/consistent-this
         */
        "consistent-this": ["error", "self"],

        /*
         * Require or disallow newline at the end of files
         *
         * https://eslint.org/docs/rules/eol-last
         */
        "eol-last": "error",

        /*
         * Require or disallow spacing between function identifiers and their
         * invocations
         *
         * https://eslint.org/docs/rules/func-call-spacing
         */
        "func-call-spacing": "error",

        /*
         * Require function names to match the name of the variable or property
         * to which they are assigned
         *
         * https://eslint.org/docs/rules/func-name-matching
         */
        "func-name-matching": "error",

        /*
         * Require or disallow named function expressions
         *
         * https://eslint.org/docs/rules/func-names
         */
        "func-names": ["error", "as-needed"],

        /*
         * Enforce the consistent use of either function declarations or expressions
         *
         * https://eslint.org/docs/rules/func-style
         */
        "func-style": "error",

        /*
         * Enforce consistent line breaks inside function parentheses
         *
         * https://eslint.org/docs/rules/function-paren-newline
         */
        "function-paren-newline": ["error", "consistent"],

        /*
         * Disallow specified identifiers
         *
         * https://eslint.org/docs/rules/id-blacklist
         */
        "id-blacklist": [
            "error",
            "e",
            "i",
            "j"
        ],

        /*
         * Enforce minimum and maximum identifier lengths
         *
         * https://eslint.org/docs/rules/id-length
         */
        "id-length": "error",

        /*
         * Require identifiers to match a specified regular expression
         *
         * https://eslint.org/docs/rules/id-match
         */
        "id-match": "error",

        /*
         * Enforce the location of arrow function bodies
         *
         * https://eslint.org/docs/rules/implicit-arrow-linebreak
         */
        "implicit-arrow-linebreak": "error",

        /*
         * Enforce consistent indentation
         *
         * https://eslint.org/docs/rules/indent
         */
        indent: [
            "error",
            indentSpaces,
            {
                MemberExpression: 0,
                SwitchCase: 1
            }
        ],

        /*
         * Enforce the consistent use of either double or single quotes in JSX attributes
         *
         * https://eslint.org/docs/rules/jsx-quotes
         */
        "jsx-quotes": "error",

        /*
         * Enforce consistent spacing between keys and values in object literal properties
         *
         * https://eslint.org/docs/rules/key-spacing
         */
        "key-spacing": [
            "error",
            {
                afterColon: true,
                beforeColon: false,
                mode: "strict"
            }
        ],

        /*
         * Enforce consistent spacing before and after keywords
         *
         * https://eslint.org/docs/rules/keyword-spacing
         */
        "keyword-spacing": [
            "error",
            {
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
                    default: {
                        after: true,
                        before: true
                    },
                    export: {
                        after: true
                    },
                    extends: {
                        after: true,
                        before: true
                    },
                    from: {
                        after: true,
                        before: true
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
                    }
                }
            }
        ],

        /*
         * Enforce position of line comments
         *
         * https://eslint.org/docs/rules/line-comment-position
         */
        "line-comment-position": "error",

        /*
         * Enforce consistent linebreak style
         *
         * https://eslint.org/docs/rules/linebreak-style
         */
        "linebreak-style": "error",

        /*
         * Require empty lines around comments
         *
         * https://eslint.org/docs/rules/lines-around-comment
         */
        "lines-around-comment": "error",

        /*
         * Require or disallow an empty line between class members
         *
         * https://eslint.org/docs/rules/lines-between-class-members
         */
        "lines-between-class-members": "error",

        /*
         * Enforce a maximum depth that blocks can be nested
         *
         * https://eslint.org/docs/rules/max-depth
         */
        "max-depth": "error",

        /*
         * Enforce a maximum line length
         *
         * https://eslint.org/docs/rules/max-len
         */
        "max-len": [
            "error",
            {
                code: maximumLineLength
            }
        ],

        /*
         * Enforce a maximum number of lines per file
         *
         * https://eslint.org/docs/rules/max-lines
         */
        "max-lines": [
            "error",
            {
                max: maximumFileLineCount
            }
        ],

        /*
         * Enforce a maximum number of line of code in a function
         *
         * https://eslint.org/docs/rules/max-lines-per-function
         */
        "max-lines-per-function": [
            "error",
            {
                max: 100
            }
        ],

        /*
         * Enforce a maximum depth that callbacks can be nested
         *
         * https://eslint.org/docs/rules/max-nested-callbacks
         */
        "max-nested-callbacks": [
            "error",
            {
                max: 3
            }
        ],

        /*
         * Enforce a maximum number of parameters in function definitions
         *
         * https://eslint.org/docs/rules/max-params
         */
        "max-params": [
            "error",
            {
                max: 5
            }
        ],

        /*
         * Enforce a maximum number of statements allowed in function blocks
         *
         * https://eslint.org/docs/rules/max-statements
         */
        "max-statements": [
            "error",
            {
                max: 40
            }
        ],

        /*
         * Enforce a maximum number of statements allowed per line
         *
         * https://eslint.org/docs/rules/max-statements-per-line
         */
        "max-statements-per-line": [
            "error",
            {
                max: 1
            }
        ],

        /*
         * Enforce a particular style for multiline comments
         *
         * https://eslint.org/docs/rules/multiline-comment-style
         */
        "multiline-comment-style": "error",

        /*
         * Enforce newlines between operands of ternary expressions
         *
         * https://eslint.org/docs/rules/multiline-ternary
         */
        "multiline-ternary": ["error", "never"],

        /*
         * Require constructor names to begin with a capital letter
         *
         * https://eslint.org/docs/rules/new-cap
         */
        "new-cap": [
            "error",
            {
                properties: false
            }
        ],

        /*
         * Require parentheses when invoking a constructor with no arguments
         *
         * https://eslint.org/docs/rules/new-parens
         */
        "new-parens": "error",

        /*
         * Require a newline after each call in a method chain
         *
         * https://eslint.org/docs/rules/newline-per-chained-call
         */
        "newline-per-chained-call": [
            "error",
            {
                ignoreChainWithDepth: 3
            }
        ],

        /*
         * Disallow Array constructors
         *
         * https://eslint.org/docs/rules/no-array-constructor
         */
        "no-array-constructor": "error",

        /*
         * Disallow bitwise operators
         *
         * https://eslint.org/docs/rules/no-bitwise
         */
        "no-bitwise": "error",

        /*
         * Disallow continue statements
         *
         * https://eslint.org/docs/rules/no-continue
         */
        "no-continue": "error",

        /*
         * Disallow inline comments after code
         *
         * https://eslint.org/docs/rules/no-inline-comments
         */
        "no-inline-comments": "error",

        /*
         * Disallow if statements as the only statement in else blocks
         *
         * https://eslint.org/docs/rules/no-lonely-if
         */
        "no-lonely-if": "error",

        /*
         * Disallow mixed binary operators
         *
         * https://eslint.org/docs/rules/no-mixed-operators
         */
        "no-mixed-operators": "error",

        /*
         * Disallow mixed spaces and tabs for indentation
         *
         * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
         */
        "no-mixed-spaces-and-tabs": "error",

        /*
         * Disallow use of chained assignment expressions
         *
         * https://eslint.org/docs/rules/no-multi-assign
         */
        "no-multi-assign": "error",

        /*
         * Disallow multiple empty lines
         *
         * https://eslint.org/docs/rules/no-multiple-empty-lines
         */
        "no-multiple-empty-lines": "error",

        /*
         * Disallow negated conditions
         *
         * https://eslint.org/docs/rules/no-negated-condition
         */
        "no-negated-condition": "error",

        /*
         * Disallow nested ternary expressions
         *
         * https://eslint.org/docs/rules/no-nested-ternary
         */
        "no-nested-ternary": "error",

        /*
         * Disallow Object constructors
         *
         * https://eslint.org/docs/rules/no-new-object
         */
        "no-new-object": "error",

        /*
         * Disallow the unary operators ++ and --
         *
         * https://eslint.org/docs/rules/no-plusplus
         */
        "no-plusplus": [
            "error",
            {
                allowForLoopAfterthoughts: true
            }
        ],

        /*
         * Disallow specified syntax
         *
         * https://eslint.org/docs/rules/no-restricted-syntax
         */
        "no-restricted-syntax": "error",

        /*
         * Disallow all tabs
         *
         * https://eslint.org/docs/rules/no-tabs
         */
        "no-tabs": "error",

        /*
         * Disallow ternary operators
         *
         * This is turned of for now because ternaries aren't that scary
         *
         * https://eslint.org/docs/rules/no-ternary
         */
        "no-ternary": "off",

        /*
         * Disallow trailing whitespace at the end of lines
         *
         * https://eslint.org/docs/rules/no-trailing-spaces
         */
        "no-trailing-spaces": "error",

        /*
         * Disallow dangling underscores in identifiers
         *
         * https://eslint.org/docs/rules/no-underscore-dangle
         */
        "no-underscore-dangle": "error",

        /*
         * Disallow ternary operators when simpler alternatives exist
         *
         * https://eslint.org/docs/rules/no-unneeded-ternary
         */
        "no-unneeded-ternary": "error",

        /*
         * Disallow whitespace before properties
         *
         * https://eslint.org/docs/rules/no-whitespace-before-property
         */
        "no-whitespace-before-property": "error",

        /*
         * Enforce the location of single-line statements
         *
         * https://eslint.org/docs/rules/nonblock-statement-body-position
         */
        "nonblock-statement-body-position": "error",

        /*
         * Enforce consistent line breaks inside braces
         *
         * https://eslint.org/docs/rules/object-curly-newline
         */
        "object-curly-newline": [
            "error",
            {
                consistent: true,
                minProperties: 2,
                multiline: true
            }
        ],

        /*
         * Enforce consistent spacing inside braces
         *
         * https://eslint.org/docs/rules/object-curly-spacing
         */
        "object-curly-spacing": ["error", "always"],

        /*
         * Enforce placing object properties on separate lines
         *
         * https://eslint.org/docs/rules/object-property-newline
         */
        "object-property-newline": "error",

        /*
         * Enforce variables to be declared either together or separately in functions
         *
         * https://eslint.org/docs/rules/one-var
         */
        "one-var": ["error", "never"],

        /*
         * Require or disallow newlines around variable declarations
         *
         * https://eslint.org/docs/rules/one-var-declaration-per-line
         */
        "one-var-declaration-per-line": "error",

        /*
         * Require or disallow assignment operator shorthand where possible
         *
         * https://eslint.org/docs/rules/operator-assignment
         */
        "operator-assignment": "error",

        /*
         * Enforce consistent linebreak style for operators
         *
         * https://eslint.org/docs/rules/operator-linebreak
         */
        "operator-linebreak": "error",

        /*
         * Require or disallow padding within blocks
         *
         * https://eslint.org/docs/rules/padded-blocks
         */
        "padded-blocks": [
            "error",
            {
                classes: "always",
                switches: "always"
            }
        ],

        /*
         * Require or disallow padding lines between statements
         *
         * https://eslint.org/docs/rules/padding-line-between-statements
         */
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                next: [
                    "return",
                    "directive",
                    "multiline-block-like",
                    "const",
                    "let",
                    "var"
                ],
                prev: [
                    "return",
                    "directive",
                    "multiline-block-like"
                ]
            }
        ],

        /*
         * Disallow using Object.assign with an object literal as the first
         * argument and prefer the use of object spread instead.
         *
         * https://eslint.org/docs/rules/prefer-object-spread
         */
        "prefer-object-spread": "error",

        /*
         * Require quotes around object literal property names
         *
         * https://eslint.org/docs/rules/quote-props
         */
        "quote-props": ["error", "as-needed"],

        /*
         * Enforce the consistent use of either backticks, double, or single quotes
         *
         * https://eslint.org/docs/rules/quotes
         */
        quotes: "error",

        /*
         * Require or disallow semicolons instead of ASI
         *
         * https://eslint.org/docs/rules/semi
         */
        semi: "error",

        /*
         * Enforce consistent spacing before and after semicolons
         *
         * https://eslint.org/docs/rules/semi-spacing
         */
        "semi-spacing": "error",

        /*
         * Enforce location of semicolons
         *
         * https://eslint.org/docs/rules/semi-style
         */
        "semi-style": ["error", "last"],

        /*
         * Require object keys to be sorted
         *
         * This is currently being overwritten by eslint-plugin-sort-key-fix
         * to enable autofixing of this error
         *
         * https://eslint.org/docs/rules/sort-keys
         */
        "sort-keys": [
            "error",
            "asc",
            {
                caseSensitive: false
            }
        ],

        /*
         * Require variables within the same declaration block to be sorted
         *
         * https://eslint.org/docs/rules/sort-vars
         */
        "sort-vars": "error",

        /*
         * Enforce consistent spacing before blocks
         *
         * https://eslint.org/docs/rules/space-before-blocks
         */
        "space-before-blocks": [
            "error",
            {
                classes: "never",
                functions: "never",
                keywords: "never"
            }
        ],

        /*
         * Enforce consistent spacing before function definition opening parenthesis
         *
         * https://eslint.org/docs/rules/space-before-function-paren
         */
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                asyncArrow: "always",
                named: "never"
            }
        ],

        /*
         * Enforce consistent spacing inside parentheses
         *
         * https://eslint.org/docs/rules/space-in-parens
         */
        "space-in-parens": ["error", "never"],

        /*
         * Require spacing around infix operators
         *
         * https://eslint.org/docs/rules/space-infix-ops
         */
        "space-infix-ops": "error",

        /*
         * Enforce consistent spacing before or after unary operators
         *
         * https://eslint.org/docs/rules/space-unary-ops
         */
        "space-unary-ops": "error",

        /*
         * Enforce consistent spacing after the // or /* in a comment
         *
         * https://eslint.org/docs/rules/spaced-comment
         */
        "spaced-comment": "error",

        /*
         * Enforce spacing around colons of switch statements
         *
         * https://eslint.org/docs/rules/switch-colon-spacing
         */
        "switch-colon-spacing": [
            "error",
            {
                after: false,
                before: true
            }
        ],

        /*
         * Require or disallow spacing between template tags and their literals
         *
         * https://eslint.org/docs/rules/template-tag-spacing
         */
        "template-tag-spacing": "error",

        /*
         * Require or disallow Unicode byte order mark (BOM)
         *
         * https://eslint.org/docs/rules/unicode-bom
         */
        "unicode-bom": "error",

        /*
         * Require parenthesis around regex literals
         *
         * https://eslint.org/docs/rules/wrap-regex
         */
        "wrap-regex": "error"

    }
};
