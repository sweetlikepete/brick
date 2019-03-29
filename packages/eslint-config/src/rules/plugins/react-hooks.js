

/*
 * This ESLint plugin enforces the Rules of Hooks.
 *
 * It is a part of the Hooks API for React.
 *
 * https://www.npmjs.com/package/eslint-plugin-react-hooks
 */


export default {
    plugins: ["react-hooks"],
    rules: {

        /*
         * Checks effect dependencies
         *
         * https://reactjs.org/docs/hooks-rules.html
         */
        "react-hooks/exhaustive-deps": "error",

        /*
         * Checks rules of Hooks
         *
         * https://reactjs.org/docs/hooks-rules.html
         */
        "react-hooks/rules-of-hooks": "error"

    }
};
