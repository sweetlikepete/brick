

/*
 * Lint rules for the TypeScript language.
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */


export default {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json"
    },
    plugins: ["@typescript-eslint"],
    rules: {

        /*
         * Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
         */
        "@typescript-eslint/adjacent-overload-signatures": "error",

        /*
         * Requires using either T[] or Array<T> for arrays (array-type from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
         */
        "@typescript-eslint/array-type": "error",

        /*
         * Disallows awaiting a value that is not a Promise (await-thenable)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
         */
        "@typescript-eslint/await-thenable": "error",

        /*
         * Bans “// @ts-ignore” comments from being used (ban-ts-ignore)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
         */
        "@typescript-eslint/ban-ts-ignore": "error",

        /*
         * Enforces that types will not to be used (ban-types from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
         */
        "@typescript-eslint/ban-types": "error",

        /*
         * Enforce camelCase naming convention
         *
         * This is off for now because it's handled by the base elsint/camelcase
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
         */
        "@typescript-eslint/camelcase": "off",

        /*
         * Require PascalCased class and interface names (class-name from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
         */
        "@typescript-eslint/class-name-casing": "error",

        /*
         * Require explicit return types on functions and class methods
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
         */
        "@typescript-eslint/explicit-function-return-type": "error",

        /*
         * Require explicit accessibility modifiers on class properties and methods (member-access from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
         */
        "@typescript-eslint/explicit-member-accessibility": "error",

        /*
         * Require or disallow spacing between function identifiers and their invocations (func-call-spacing)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
         */
        "@typescript-eslint/func-call-spacing": "error",

        /*
         * Enforces naming of generic type variables
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
         */
        "@typescript-eslint/generic-type-naming": "error",

        /*
         * Enforce consistent indentation (indent from TSLint)
         *
         * This is off because it's handled by the built in eslint indent rule,
         * and in some cases it can conflict.
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
         */
        "@typescript-eslint/indent": "off",

        /*
         * Require that interface names be prefixed with I (interface-name from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
         */
        "@typescript-eslint/interface-name-prefix": [
            "error",
            "never"
        ],

        /*
         * Require a specific member delimiter style for interfaces and type literals
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
         */
        "@typescript-eslint/member-delimiter-style": "error",

        /*
         * Enforces naming conventions for class members by visibility.
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
         */
        "@typescript-eslint/member-naming": "error",

        /*
         * Require a consistent member declaration order (member-ordering from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
         */
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "public-field",
                    "protected-field",
                    "private-field",
                    "static-field",
                    "instance-field",
                    "field",
                    "constructor",
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",
                    "public-method",
                    "protected-method",
                    "private-method",
                    "static-method",
                    "instance-method",
                    "method"
                ]
            }
        ],

        /*
         * Enforces the use of as Type assertions instead of <Type> assertions (no-angle-bracket-type-assertion from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-angle-bracket-type-assertion.md
         */
        "@typescript-eslint/no-angle-bracket-type-assertion": "error",

        /*
         * Disallow generic Array constructors
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
         */
        "@typescript-eslint/no-array-constructor": "error",

        /*
         * Disallow the declaration of empty interfaces (no-empty-interface from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
         */
        "@typescript-eslint/no-empty-interface": "error",

        /*
         * Disallow usage of the any type (no-any from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
         */
        "@typescript-eslint/no-explicit-any": "error",

        /*
         * Disallow unnecessary parentheses
         *
         * This is off for now because it conflicts with react/jsx-wrap-multilines
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
         */
        "@typescript-eslint/no-extra-parens": "off",

        /*
         * Forbids the use of classes as namespaces (no-unnecessary-class from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
         */
        "@typescript-eslint/no-extraneous-class": "error",

        /*
         * Disallow iterating over an array with a for-in loop (no-for-in-array)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
         */
        "@typescript-eslint/no-for-in-array": "error",

        /*
         * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean. (no-inferrable-types from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
         */
        "@typescript-eslint/no-inferrable-types": "error",

        /*
         * Disallow Magic Numbers
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
         */
        "@typescript-eslint/no-magic-numbers": [
            "error",
            {
                detectObjects: false,
                ignore: [
                    -1,
                    0,
                    1,
                    2
                ],
                ignoreArrayIndexes: true
            }
        ],

        /*
         * Enforce valid definition of new and constructor. (no-misused-new from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
         */
        "@typescript-eslint/no-misused-new": "error",

        /*
         * Disallow the use of custom TypeScript modules and namespaces (no-namespace from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
         */
        "@typescript-eslint/no-namespace": "error",

        /*
         * Disallows non-null assertions using the ! postfix operator (no-non-null-assertion from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
         */
        "@typescript-eslint/no-non-null-assertion": "error",

        /*
         * Forbids an object literal to appear in a type assertion expression (no-object-literal-type-assertion from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-object-literal-type-assertion.md
         */
        "@typescript-eslint/no-object-literal-type-assertion": "error",

        /*
         * Disallow the use of parameter properties in class constructors. (no-parameter-properties from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
         */
        "@typescript-eslint/no-parameter-properties": "error",

        /*
         * Prefer the newer ES6-style imports over require().
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
         */
        "@typescript-eslint/no-require-imports": "error",

        /*
         * Disallow aliasing this (no-this-assignment from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
         */
        "@typescript-eslint/no-this-alias": "error",

        /*
         * Disallow /// <reference path="" /> comments (no-reference from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-triple-slash-reference.md
         */
        "@typescript-eslint/no-triple-slash-reference": "error",

        /*
         * Disallow the use of type aliases (interface-over-type-literal from TSLint)
         *
         * Off for now because these seem like they're too useful to pass up
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
         */
        "@typescript-eslint/no-type-alias": "off",

        /*
         * Warns when a namespace qualifier is unnecessary.
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
         */
        "@typescript-eslint/no-unnecessary-qualifier": "error",

        /*
         * Warns if a type assertion does not change the type of an expression (no-unnecessary-type-assertion from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
         */
        "@typescript-eslint/no-unnecessary-type-assertion": "error",

        /*
         * Disallow unused variables (no-unused-variable from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
         */
        "@typescript-eslint/no-unused-vars": "error",

        /*
         * Disallow the use of variables before they are defined
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
         */
        "@typescript-eslint/no-use-before-define": "error",

        /*
         * Disallow unnecessary constructors
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
         */
        "@typescript-eslint/no-useless-constructor": "error",

        /*
         * Disallows the use of require statements except in import statements (no-var-requires from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
         */
        "@typescript-eslint/no-var-requires": "error",

        /*
         * Use for-of loops instead of standard for loops over arrays
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
         */
        "@typescript-eslint/prefer-for-of": "error",

        /*
         * Use function types instead of interfaces with call signatures
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
         */
        "@typescript-eslint/prefer-function-type": "error",

        /*
         * Enforce includes method over indexOf method
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
         */
        "@typescript-eslint/prefer-includes": "error",

        /*
         * Prefer an interface declaration over a type literal (type T = { ... }) (interface-over-type-literal from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md
         */
        "@typescript-eslint/prefer-interface": "error",

        /*
         * Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules. (no-internal-module from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
         */
        "@typescript-eslint/prefer-namespace-keyword": "error",

        /*
         * Enforce to use RegExp#exec over String#match
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
         */
        "@typescript-eslint/prefer-regexp-exec": "error",

        /*
         * Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
         */
        "@typescript-eslint/prefer-string-starts-ends-with": "error",

        /*
         * Functions that return promises must be async
         *
         * This is off for now because it conflicts with require-await in some cases
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
         */
        "@typescript-eslint/promise-function-async": "off",

        /*
         * Enforce giving compare argument to Array#sort
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
         */
        "@typescript-eslint/require-array-sort-compare": "error",

        /*
         * When adding two variables, operands must both be of type number or of type string. (restrict-plus-operands from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
         */
        "@typescript-eslint/restrict-plus-operands": "error",

        /*
         * Require or disallow semicolons instead of ASI
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
         */
        "@typescript-eslint/semi": "error",

        /*
         * Require consistent spacing around type annotations (typedef-whitespace from TSLint)
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
         */
        "@typescript-eslint/type-annotation-spacing": "error",

        /*
         * Enforces unbound methods are called with their expected scope.
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
         */
        "@typescript-eslint/unbound-method": "error",

        /*
         * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
         *
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
         */
        "@typescript-eslint/unified-signatures": "error"

    }
};
