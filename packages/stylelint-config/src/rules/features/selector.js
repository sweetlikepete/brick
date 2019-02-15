

/*
 * Limit language features Selector
 *
 * https://stylelint.io/user-guide/rules/#limit-language-features
 */


import { idPattern } from "../../config";


export default {
    rules: {

        /*
         * Specify a blacklist of disallowed attribute operators.
         *
         * https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist/
         */
        "selector-attribute-operator-blacklist": null,

        /*
         * Specify a whitelist of allowed attribute operators.
         *
         * https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist/
         */
        "selector-attribute-operator-whitelist": null,

        /*
         * Specify a pattern for class selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-class-pattern/
         */
        "selector-class-pattern": idPattern,

        /*
         * Specify a blacklist of disallowed combinators.
         *
         * https://stylelint.io/user-guide/rules/selector-combinator-blacklist/
         */
        "selector-combinator-blacklist": null,

        /*
         * Specify a whitelist of allowed combinators.
         *
         * https://stylelint.io/user-guide/rules/selector-combinator-whitelist/
         */
        "selector-combinator-whitelist": null,

        /*
         * Specify a pattern for ID selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-id-pattern/
         */
        "selector-id-pattern": idPattern,

        /*
         * Limit the number of attribute selectors in a selector.
         *
         * https://stylelint.io/user-guide/rules/selector-max-attribute/
         */
        "selector-max-attribute": 3,

        /*
         * Limit the number of classes in a selector.
         *
         * https://stylelint.io/user-guide/rules/selector-max-class/
         */
        "selector-max-class": 10,

        /*
         * Limit the number of combinators in a selector.
         *
         * https://stylelint.io/user-guide/rules/selector-max-combinators/
         */
        "selector-max-combinators": 10,

        /*
         * Limit the number of compound selectors in a selector.
         *
         * https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
         */
        "selector-max-compound-selectors": 10,

        /*
         * Limit the number of adjacent empty lines within selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-max-empty-lines/
         */
        "selector-max-empty-lines": 0,

        /*
         * Limit the number of ID selectors in a selector.
         *
         * https://stylelint.io/user-guide/rules/selector-max-id/
         */
        "selector-max-id": 1,

        /*
         * Limit the number of pseudo-classes in a selector.
         *
         * https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
         */
        "selector-max-pseudo-class": 3,

        /*
         * Limit the specificity of selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-max-specificity/
         */
        "selector-max-specificity": "3,8,8",

        /*
         * Limit the number of type in a selector.
         *
         * https://stylelint.io/user-guide/rules/selector-max-type/
         */
        "selector-max-type": 12,

        /*
         * Limit the number of universal selectors in a selector.
         *
         * https://stylelint.io/user-guide/rules/selector-max-universal/
         */
        "selector-max-universal": 1,

        /*
         * Specify a pattern for the selectors of rules nested within rules.
         *
         * https://stylelint.io/user-guide/rules/selector-nested-pattern/
         */
        "selector-nested-pattern": null,

        /*
         * Disallow qualifying a selector by type.
         *
         * https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
         */
        "selector-no-qualifying-type": null,

        /*
         * Disallow vendor prefixes for selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
         */
        "selector-no-vendor-prefix": true,

        /*
         * Specify a blacklist of disallowed pseudo-class selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist/
         */
        "selector-pseudo-class-blacklist": null,

        /*
         * Specify a whitelist of allowed pseudo-class selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist/
         */
        "selector-pseudo-class-whitelist": null,

        /*
         * Specify a blacklist of disallowed pseudo-element selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist/
         */
        "selector-pseudo-element-blacklist": null,

        /*
         * Specify a whitelist of allowed pseudo-element selectors.
         *
         * https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist/
         */
        "selector-pseudo-element-whitelist": null

    }
};
