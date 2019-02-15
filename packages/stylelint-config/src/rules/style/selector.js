

/*
 * Stylistic issues Selector
 *
 * https://stylelint.io/user-guide/rules/#stylistic-issues
 */


export default {
    rules: {

        /*
         * Require a single space or disallow whitespace on the inside of the brackets within attribute selectors (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
         */
        "selector-attribute-brackets-space-inside": "never",

        /*
         * Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/
         */
        "selector-attribute-operator-space-after": "always",

        /*
         * Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/
         */
        "selector-attribute-operator-space-before": "always",

        /*
         * Require or disallow quotes for attribute values.
         *
         * https://stylelint.io/user-guide/rules/selector-attribute-quotes/
         */
        "selector-attribute-quotes": "always",

        /*
         * Require a single space or disallow whitespace after the combinators of selectors (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-combinator-space-after/
         */
        "selector-combinator-space-after": "always",

        /*
         * Require a single space or disallow whitespace before the combinators of selectors (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-combinator-space-before/
         */
        "selector-combinator-space-before": "always",

        /*
         * Disallow non-space characters for descendant combinators of selectors (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/
         */
        "selector-descendant-combinator-no-non-space": true,

        /*
         * Specify lowercase or uppercase for pseudo-class selectors (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
         */
        "selector-pseudo-class-case": "lower",

        /*
         * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/
         */
        "selector-pseudo-class-parentheses-space-inside": "never",

        /*
         * Specify lowercase or uppercase for pseudo-element selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-element-case/
         */
        "selector-pseudo-element-case": "lower",

        /*
         * Specify single or double colon notation for applicable pseudo-elements (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
         */
        "selector-pseudo-element-colon-notation": "single",

        /*
         * Specify lowercase or uppercase for type selector (Autofixable).
         *
         * https://stylelint.io/user-guide/rules/selector-type-case/
         */
        "selector-type-case": "lower"

    }
};
