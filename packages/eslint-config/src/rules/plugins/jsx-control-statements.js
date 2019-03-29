

/*
 * Lints jsx control statements
 *
 * https://www.npmjs.com/package/eslint-plugin-jsx-control-statements
 */


export default {
    env: {
        "jsx-control-statements/jsx-control-statements": true
    },
    plugins: ["jsx-control-statements"],
    rules: {

        /*
         * Warn when Choose tag is empty or does not have at least one When tag
         * as child.
         *
         * https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/HEAD/docs/rules/jsx-choose-not-empty.md
         */
        "jsx-control-statements/jsx-choose-not-empty": "error",

        /*
         * Warn if For tag is missing each attribute. And also marks the variable
         * as defined.
         *
         * https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/HEAD/docs/rules/jsx-for-require-each.md
         */
        "jsx-control-statements/jsx-for-require-each": "error",

        /*
         * Warn if For tag is missing of attribute.
         *
         * https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/HEAD/docs/rules/jsx-for-require-of.md
         */
        "jsx-control-statements/jsx-for-require-of": "error",

        /*
         * Warn if If tag is missing condition attribute.
         *
         * https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/HEAD/docs/rules/jsx-if-require-condition.md
         */
        "jsx-control-statements/jsx-if-require-condition": "error",

        /*
         * This rule is the same as the generic eslint no-undef rule
         * (see http://eslint.org/docs/rules/no-undef) except with an exception
         * built in for variables that are implicitly declared by <For> and <With>
         * statements. Note that this includes no-undef's code and completely
         * replaces it rather than supplementing it - if this rule is on, no-undef
         * should be off. It is compatible with no-undef's options and \/* global *\/
         * declarations.
         *
         * https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/HEAD/docs/rules/jsx-jcs-no-undef.md
         */
        "jsx-control-statements/jsx-jcs-no-undef": "error",

        /*
         * Warn when Otherwise tag is used more than once inside Choose and is not
         * last child.
         *
         * https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/HEAD/docs/rules/jsx-otherwise-once-last.md
         */
        "jsx-control-statements/jsx-otherwise-once-last": "error",

        /*
         * Use If tag instead of ternary operator.
         *
         * https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/HEAD/docs/rules/jsx-use-if-tag.md
         */
        "jsx-control-statements/jsx-use-if-tag": "error",

        /*
         * Warn if When tag is missing condition attribute.
         *
         * https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/HEAD/docs/rules/jsx-when-require-condition.md
         */
        "jsx-control-statements/jsx-when-require-condition": "error"

    }
};
