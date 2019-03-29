

/*
 * Performance-minded React linting rules for ESLint motivated by esamatti's
 * post "React.js pure render performance anti-pattern".
 * https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f
 *
 * https://www.npmjs.com/package/eslint-plugin-react-perf
 */


export default {
    plugins: ["react-perf"],
    rules: {

        /*
         * Prevent JSX that are local to the current method from being used as values of JSX props
         *
         * https://github.com/cvazac/eslint-plugin-react-perf/blob/HEAD/docs/rules/jsx-no-jsx-as-prop.md
         */
        "react-perf/jsx-no-jsx-as-prop": "error",

        /*
         * Prevent Arrays that are local to the current method from being used as values of JSX props
         *
         * https://github.com/cvazac/eslint-plugin-react-perf/blob/HEAD/docs/rules/jsx-no-new-array-as-prop.md
         */
        "react-perf/jsx-no-new-array-as-prop": "error",

        /*
         * Prevent Functions that are local to the current method from being used as values of JSX props
         *
         * https://github.com/cvazac/eslint-plugin-react-perf/blob/HEAD/docs/rules/jsx-no-new-function-as-prop.md
         */
        "react-perf/jsx-no-new-function-as-prop": "error",

        /*
         * Prevent Objects that are local to the current method from being used as values of JSX props
         *
         * https://github.com/cvazac/eslint-plugin-react-perf/blob/HEAD/docs/rules/jsx-no-new-object-as-prop.md
         */
        "react-perf/jsx-no-new-object-as-prop": "error"


    }
};
