

/*
 * Rules for Array functions and methods.
 *
 * https://www.npmjs.com/package/eslint-plugin-array-func
 */


export default {
    plugins: ["array-func"],
    rules: {

        /*
         * Avoid reversing the array and running a method on it if there is an
         * equivalent of the method operating on the array from the other end.
         *
         * https://www.npmjs.com/package/eslint-plugin-array-func#avoid-reverse
         */
        "array-func/avoid-reverse": "error",

        /*
         * Prefer using the mapFn callback of Array.from over an immediate
         * .map() call on the Array.from result.
         *
         * https://www.npmjs.com/package/eslint-plugin-array-func#from-map
         */
        "array-func/from-map": "error",

        /*
         * Avoid the this parameter when providing arrow function as callback
         * in array functions.
         *
         * https://www.npmjs.com/package/eslint-plugin-array-func#no-unnecessary-this-arg
         */
        "array-func/no-unnecessary-this-arg": "error",

        /*
         * Use Array.from instead of [...iterable] for performance benefits.
         *
         * Off for now, performance benefits probably don't warrant the irritation
         *
         * https://www.npmjs.com/package/eslint-plugin-array-func#prefer-array-from
         */
        "array-func/prefer-array-from": "off",

        /*
         * Use .flat() to flatten an array of arrays. This rule currently
         * recognizes two patterns and can replace them with a .flat() call.
         *
         * https://www.npmjs.com/package/eslint-plugin-array-func#prefer-flat
         */
        "array-func/prefer-flat": "error",

        /*
         * Use .flatMap() to flatten an array and map the values instead of
         * using .flat().map().
         *
         * https://www.npmjs.com/package/eslint-plugin-array-func#prefer-flat-map
         */
        "array-func/prefer-flat-map": "error"

    }
};
