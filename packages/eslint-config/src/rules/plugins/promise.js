

/*
 * Enforce best practices for JavaScript promises.
 *
 * https://github.com/xjamundx/eslint-plugin-promise
 */


export default {
    plugins: ["promise"],
    rules: {

        /*
         * Return inside each then() to create readable and reusable Promise chains.
         *
         * Off for now, doesn't seem like a good idea
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/always-return.md
         */
        "promise/always-return": "off",

        /*
         * Avoid creating new promises outside of utility libs (use pify instead)
         *
         * Off for now, doesn't seem like a good idea
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/avoid-new.md
         */
        "promise/avoid-new": "off",

        /*
         * Enforces the use of catch() on un-returned promises.
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/catch-or-return.md
         */
        "promise/catch-or-return": "error",

        /*
         * Avoid calling cb() inside of a then() (use nodeify instead)
         *
         * Off for now, doesn't seem like a good idea
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-callback-in-promise.md
         */
        "promise/no-callback-in-promise": "off",

        /*
         * In an ES5 environment, make sure to create a Promise constructor before using.
         *
         * Off for now because we're assuming there is always a native promise
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-native.md
         */
        "promise/no-native": "off",

        /*
         * Avoid nested then() or catch() statements
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-nesting.md
         */
        "promise/no-nesting": "error",

        /*
         * Avoid calling new on a Promise static method
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-new-statics.md
         */
        "promise/no-new-statics": "error",

        /*
         * Avoid using promises inside of callbacks
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-promise-in-callback.md
         */
        "promise/no-promise-in-callback": "error",

        /*
         * Disallow return statements in finally()
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-return-in-finally.md
         */
        "promise/no-return-in-finally": "error",

        /*
         * Avoid wrapping values in Promise.resolve or Promise.reject when not needed.
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/no-return-wrap.md
         */
        "promise/no-return-wrap": "error",

        /*
         * Enforce consistent param names and ordering when creating new promises.
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/param-names.md
         */
        "promise/param-names": "error",

        /*
         * Prefer async/await to the callback pattern
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/prefer-await-to-callbacks.md
         */
        "promise/prefer-await-to-callbacks": "error",

        /*
         * Prefer await to then() for reading Promise values
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/prefer-await-to-then.md
         */
        "promise/prefer-await-to-then": "error",

        /*
         * Ensures the proper number of arguments are passed to Promise functions
         *
         * https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/valid-params.md
         */
        "promise/valid-params": "error"

    }
};
