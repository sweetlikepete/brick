

/*
 * These rules relate to possible syntax or logic errors in JavaScript code
 *
 * https://eslint.org/docs/rules/#possible-errors
 */


export default {
    rules: {

        /*
         * Enforce “for” loop update clause moving the counter in the right direction.
         *
         * https://eslint.org/docs/rules/for-direction
         */
        "for-direction": "error",

        /*
         * Enforce return statements in getters
         *
         * https://eslint.org/docs/rules/getter-return
         */
        "getter-return": "error",

        /*
         * Disallow using an async function as a Promise executor
         *
         * https://eslint.org/docs/rules/no-async-promise-executor
         */
        "no-async-promise-executor": "error",

        /*
         * Disallow await inside of loops
         *
         * https://eslint.org/docs/rules/no-await-in-loop
         */
        "no-await-in-loop": "error",

        /*
         * Disallow comparing against -0
         *
         * https://eslint.org/docs/rules/no-compare-neg-zero
         */
        "no-compare-neg-zero": "error",

        /*
         * Disallow assignment operators in conditional expressions
         *
         * https://eslint.org/docs/rules/no-cond-assign
         */
        "no-cond-assign": "error",

        /*
         * Disallow the use of console
         *
         * Off for now, because I tried turning this on and I wanted to kill myself
         *
         * https://eslint.org/docs/rules/no-console
         */
        "no-console": "off",

        /*
         * Disallow constant expressions in conditions
         *
         * https://eslint.org/docs/rules/no-constant-condition
         */
        "no-constant-condition": "error",

        /*
         * Disallow control characters in regular expressions
         *
         * https://eslint.org/docs/rules/no-control-regex
         */
        "no-control-regex": "error",

        /*
         * Disallow the use of debugger
         *
         * https://eslint.org/docs/rules/no-debugger
         */
        "no-debugger": "error",

        /*
         * Disallow duplicate arguments in function definitions
         *
         * https://eslint.org/docs/rules/no-dupe-args
         */
        "no-dupe-args": "error",

        /*
         * Disallow duplicate keys in object literals
         *
         * https://eslint.org/docs/rules/no-dupe-keys
         */
        "no-dupe-keys": "error",

        /*
         * Disallow duplicate case labels
         *
         * https://eslint.org/docs/rules/no-duplicate-case
         */
        "no-duplicate-case": "error",

        /*
         * Disallow empty block statements
         *
         * https://eslint.org/docs/rules/no-empty
         */
        "no-empty": [
            "error",
            {
                allowEmptyCatch: true
            }
        ],

        /*
         * Disallow empty character classes in regular expressions
         *
         * https://eslint.org/docs/rules/no-empty-character-class
         */
        "no-empty-character-class": "error",

        /*
         * Disallow reassigning exceptions in catch clauses
         *
         * https://eslint.org/docs/rules/no-ex-assign
         */
        "no-ex-assign": "error",

        /*
         * Disallow unnecessary boolean casts
         *
         * https://eslint.org/docs/rules/no-extra-boolean-cast
         */
        "no-extra-boolean-cast": "error",

        /*
         * Disallow unnecessary parentheses
         *
         * https://eslint.org/docs/rules/no-extra-parens
         */
        "no-extra-parens": [
            "error",
            "all",
            {
                ignoreJSX: "multi-line"
            }
        ],

        /*
         * Disallow unnecessary semicolons
         *
         * https://eslint.org/docs/rules/no-extra-semi
         */
        "no-extra-semi": "error",

        /*
         * Disallow reassigning function declarations
         *
         * https://eslint.org/docs/rules/no-func-assign
         */
        "no-func-assign": "error",

        /*
         * Disallow variable or function declarations in nested blocks
         *
         * https://eslint.org/docs/rules/no-inner-declarations
         */
        "no-inner-declarations": "error",

        /*
         * Disallow invalid regular expression strings in RegExp constructors
         *
         * https://eslint.org/docs/rules/no-invalid-regexp
         */
        "no-invalid-regexp": "error",

        /*
         * Disallow irregular whitespace
         *
         * https://eslint.org/docs/rules/no-irregular-whitespace
         */
        "no-irregular-whitespace": "error",

        /*
         * Disallow characters which are made with multiple code points in
         * character class syntax
         *
         * https://eslint.org/docs/rules/no-misleading-character-class
         */
        "no-misleading-character-class": "error",

        /*
         * Disallow calling global object properties as functions
         *
         * https://eslint.org/docs/rules/no-obj-calls
         */
        "no-obj-calls": "error",

        /*
         * Disallow calling some Object.prototype methods directly on objects
         *
         * https://eslint.org/docs/rules/no-prototype-builtins
         */
        "no-prototype-builtins": "error",

        /*
         * Disallow multiple spaces in regular expressions
         *
         * https://eslint.org/docs/rules/no-regex-spaces
         */
        "no-regex-spaces": "error",

        /*
         * Disallow sparse arrays
         *
         * https://eslint.org/docs/rules/no-sparse-arrays
         */
        "no-sparse-arrays": "error",

        /*
         * Disallow template literal placeholder syntax in regular strings
         *
         * https://eslint.org/docs/rules/no-template-curly-in-string
         */
        "no-template-curly-in-string": "error",

        /*
         * Disallow confusing multiline expressions
         *
         * https://eslint.org/docs/rules/no-unexpected-multiline
         */
        "no-unexpected-multiline": "error",

        /*
         * Disallow unreachable code after return, throw, continue, and break statements
         *
         * https://eslint.org/docs/rules/no-unreachable
         */
        "no-unreachable": "error",

        /*
         * Disallow control flow statements in finally blocks
         *
         * https://eslint.org/docs/rules/no-unsafe-finally
         */
        "no-unsafe-finally": "error",

        /*
         * Disallow negating the left operand of relational operators
         *
         * https://eslint.org/docs/rules/no-unsafe-negation
         */
        "no-unsafe-negation": "error",

        /*
         * Disallow assignments that can lead to race conditions due to usage of await or yield
         *
         * https://eslint.org/docs/rules/require-atomic-updates
         */
        "require-atomic-updates": "error",

        /*
         * Require calls to isNaN() when checking for NaN
         *
         * https://eslint.org/docs/rules/use-isnan
         */
        "use-isnan": "error",

        /*
         * Enforce comparing typeof expressions against valid strings
         *
         * https://eslint.org/docs/rules/valid-typeof
         */
        "valid-typeof": "error"

    }
};
