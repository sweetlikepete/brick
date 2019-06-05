

/*
 * Various awesome ESLint rules
 *
 * https://github.com/sindresorhus/eslint-plugin-unicorn
 */


export default {
    plugins: ["unicorn"],
    rules: {

        /*
         * Enforce a specific parameter name in catch clauses.
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
         */
        "unicorn/catch-error-name": [
            "error",
            {
                name: "error"
            }
        ],

        /*
         * Enforce correct Error subclassing. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
         */
        "unicorn/custom-error-definition": "error",

        /*
         * Enforce passing a message value when throwing a built-in error.
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
         */
        "unicorn/error-message": "error",

        /*
         * Require escape sequences to use uppercase values. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
         */
        "unicorn/escape-case": "error",

        /*
         * Enforce explicitly comparing the length property of a value. (partly fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
         */
        "unicorn/explicit-length-check": "error",

        /*
         * Enforce a case style for filenames.
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
         */
        "unicorn/filename-case": [
            "error",
            {
                case: "kebabCase"
            }
        ],

        /*
         * Enforce importing index files with .. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
         */
        "unicorn/import-index": "error",

        /*
         * Enforce the use of new for all builtins, except String, Number and Boolean. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
         */
        "unicorn/new-for-builtins": "error",

        /*
         * Enforce specifying rules to disable in eslint-disable comments.
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
         */
        "unicorn/no-abusive-eslint-disable": "error",

        /*
         * Require Array.isArray() instead of instanceof Array. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
         */
        "unicorn/no-array-instanceof": "error",

        /*
         * Do not use leading/trailing space between console.log parameters. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
         */
        "unicorn/no-console-spaces": "error",

        /*
         * Prevents passing a function reference directly to iterator methods. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md
         */
        "unicorn/no-fn-reference-in-iterator": "error",

        /*
         * Do not use a for loop that can be replaced with a for-of loop
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
         */
        "unicorn/no-for-loop": "error",

        /*
         * Enforce the use of unicode escapes instead of hexadecimal escapes. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
         */
        "unicorn/no-hex-escape": "error",

        /*
         * Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer(). (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
         */
        "unicorn/no-new-buffer": "error",

        /*
         * Disallow process.exit().
         *
         * Turned off for now because 'no-process-exit' takes care of it
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
         */
        "unicorn/no-process-exit": "off",

        /*
         * Disallow unreadable array destructuring.
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
         */
        "unicorn/no-unreadable-array-destructuring": "error",

        /*
         * Disallow unsafe regular expressions.
         *
         * Turned off here because 'security/detect-unsafe-regex' takes care of this
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md
         */
        "unicorn/no-unsafe-regex": "off",

        /*
         * Disallow unused object properties.
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
         */
        "unicorn/no-unused-properties": "error",

        /*
         * Disallow number literals with zero fractions or dangling dots
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
         */
        "unicorn/no-zero-fractions": "error",

        /*
         * Enforce lowercase identifier and uppercase value for number literals. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
         */
        "unicorn/number-literal-case": "error",

        /*
         * Prefer addEventListener over on-functions. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
         */
        "unicorn/prefer-add-event-listener": "error",

        /*
         * Prefer KeyboardEvent#key over KeyboardEvent#keyCode
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-event-key.md
         */
        "unicorn/prefer-event-key": "error",

        /*
         * Prefer the exponentiation operator over Math.pow() (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md
         */
        "unicorn/prefer-exponentiation-operator": "error",

        /*
         * Prefer .includes() over .indexOf() when checking for existence or non-existence
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
         */
        "unicorn/prefer-includes": "error",

        /*
         * Prefer append over appendChild. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md
         */
        "unicorn/prefer-node-append": "error",

        /*
         * Prefer remove over parentNode.removeChild and parentElement.removeChild
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md
         */
        "unicorn/prefer-node-remove": "error",

        /*
         * Prefer querySelector over getElementById, querySelectorAll over getElementsByClassName and getElementsByTagName. (partly fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
         */
        "unicorn/prefer-query-selector": "error",

        /*
         * Prefer the spread operator over Array.from(). (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
         */
        "unicorn/prefer-spread": "error",

        /*
         * Prefer String#startsWith & String#endsWith over more complex alternatives.
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
         */
        "unicorn/prefer-starts-ends-with": "error",

        /*
         * Prefer textContent over innerText
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-text-content.md
         */
        "unicorn/prefer-text-content": "error",

        /*
         * Enforce throwing TypeError in type checking conditions. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
         */
        "unicorn/prefer-type-error": "error",

        /*
         * Prevent abbreviations
         *
         * Heres a list of the defaults:
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/rules/prevent-abbreviations.js#L13
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
         */
        "unicorn/prevent-abbreviations": [
            "error",
            {

                /*
                 * We disable this because of how often Objects are used to interface
                 * with third party code, and we don't want to eslint-ignore all of that.
                 */
                checkProperties: false,
                replacements: {
                    args: {
                        // This is a reserved keyword in sone cases - don't replace into this
                        arguments: false
                    },
                    envs: {
                        environments: true
                    },
                    props: {
                        // This is used extremely frequently in react and we don't want to change it
                        properties: false
                    }
                }
            }
        ],

        /*
         * Enforce the use of regex shorthands to improve readability. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md
         */
        "unicorn/regex-shorthand": "error",

        /*
         * Require new when throwing an error. (fixable)
         *
         * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
         */
        "unicorn/throw-new-error": "error"

    }
};

