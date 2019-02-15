

/*
 * These rules relate to ES6, also known as ES2015
 *
 * https://eslint.org/docs/rules/#ecmascript-6
 */


export default {
    rules: {

        /*
         * Require braces around arrow function bodies
         *
         * https://eslint.org/docs/rules/arrow-body-style
         */
        "arrow-body-style": "error",

        /*
         * Require parentheses around arrow function arguments
         *
         * https://eslint.org/docs/rules/arrow-parens
         */
        "arrow-parens": "error",

        /*
         * Enforce consistent spacing before and after the arrow in arrow functions
         *
         * https://eslint.org/docs/rules/arrow-spacing
         */
        "arrow-spacing": "error",

        /*
         * Require super() calls in constructors
         *
         * https://eslint.org/docs/rules/constructor-super
         */
        "constructor-super": "error",

        /*
         * Enforce consistent spacing around * operators in generator functions
         *
         * https://eslint.org/docs/rules/generator-star-spacing
         */
        "generator-star-spacing": "error",

        /*
         * Disallow reassigning class members
         *
         * https://eslint.org/docs/rules/no-class-assign
         */
        "no-class-assign": "error",

        /*
         * Disallow arrow functions where they could be confused with comparisons
         *
         * Off for now because I believe in myself
         *
         * https://eslint.org/docs/rules/no-confusing-arrow
         */
        "no-confusing-arrow": "off",

        /*
         * Disallow reassigning const variables
         *
         * https://eslint.org/docs/rules/no-const-assign
         */
        "no-const-assign": "error",

        /*
         * Disallow duplicate class members
         *
         * https://eslint.org/docs/rules/no-dupe-class-members
         */
        "no-dupe-class-members": "error",

        /*
         * Disallow duplicate module imports
         *
         * https://eslint.org/docs/rules/no-duplicate-imports
         */
        "no-duplicate-imports": "error",

        /*
         * Disallow new operators with the Symbol object
         *
         * https://eslint.org/docs/rules/no-new-symbol
         */
        "no-new-symbol": "error",

        /*
         * Disallow specified modules when loaded by import
         *
         * https://eslint.org/docs/rules/no-restricted-imports
         */
        "no-restricted-imports": "error",

        /*
         * Disallow this/super before calling super() in constructors
         *
         * https://eslint.org/docs/rules/no-this-before-super
         */
        "no-this-before-super": "error",

        /*
         * Disallow unnecessary computed property keys in object literals
         *
         * https://eslint.org/docs/rules/no-useless-computed-key
         */
        "no-useless-computed-key": "error",

        /*
         * Disallow unnecessary constructors
         *
         * https://eslint.org/docs/rules/no-useless-constructor
         */
        "no-useless-constructor": "error",

        /*
         * Disallow renaming import, export, and destructured assignments to the
         * same name
         *
         * https://eslint.org/docs/rules/no-useless-rename
         */
        "no-useless-rename": "error",

        /*
         * Require let or const instead of var
         *
         * https://eslint.org/docs/rules/no-var
         */
        "no-var": "error",

        /*
         * Require or disallow method and property shorthand syntax for object literals
         *
         * https://eslint.org/docs/rules/object-shorthand
         */
        "object-shorthand": "error",

        /*
         * Require using arrow functions for callbacks
         *
         * https://eslint.org/docs/rules/prefer-arrow-callback
         */
        "prefer-arrow-callback": "error",

        /*
         * Require const declarations for variables that are never reassigned
         * after declared
         *
         * https://eslint.org/docs/rules/prefer-const
         */
        "prefer-const": "error",

        /*
         * Require destructuring from arrays and/or objects
         *
         * https://eslint.org/docs/rules/prefer-destructuring
         */
        "prefer-destructuring": [
            "error",
            {
                array: true,
                object: false
            }
        ],

        /*
         * Disallow parseInt() and Number.parseInt() in favor of binary, octal,
         * and hexadecimal literals
         *
         * https://eslint.org/docs/rules/prefer-numeric-literals
         */
        "prefer-numeric-literals": "error",

        /*
         * Require rest parameters instead of arguments
         *
         * https://eslint.org/docs/rules/prefer-rest-params
         */
        "prefer-rest-params": "error",

        /*
         * Require spread operators instead of .apply()
         *
         * https://eslint.org/docs/rules/prefer-spread
         */
        "prefer-spread": "error",

        /*
         * Require template literals instead of string concatenation
         *
         * https://eslint.org/docs/rules/prefer-template
         */
        "prefer-template": "error",

        /*
         * Require generator functions to contain yield
         *
         * https://eslint.org/docs/rules/require-yield
         */
        "require-yield": "error",

        /*
         * Enforce spacing between rest and spread operators and their expressions
         *
         * https://eslint.org/docs/rules/rest-spread-spacing
         */
        "rest-spread-spacing": "error",

        /*
         * Enforce sorted import declarations within modules
         *
         * Off for now because we handle this with 'import/order' because it has
         * more fine grained control
         *
         * https://eslint.org/docs/rules/sort-imports
         */
        "sort-imports": "off",

        /*
         * Require symbol descriptions
         *
         * https://eslint.org/docs/rules/symbol-description
         */
        "symbol-description": "error",

        /*
         * Require or disallow spacing around embedded expressions of template strings
         *
         * https://eslint.org/docs/rules/template-curly-spacing
         */
        "template-curly-spacing": [
            "error",
            "always"
        ],

        /*
         * Require or disallow spacing around the * in yield* Expressions
         *
         * https://eslint.org/docs/rules/yield-star-spacing
         */
        "yield-star-spacing": "error"

    }
};
