

/*
 * These rules disallow unsafe coding practices that may result into security
 * vulnerabilities. We will disallow assignments (e.g., to innerHTML) as well as
 * calls (e.g., to insertAdjacentHTML) without the use of a pre-defined escaping
 * function. The escaping functions must be called with a template string. The
 * function names are hardcoded as Sanitizer.escapeHTML and escapeHTML.
 *
 * https://www.npmjs.com/package/eslint-plugin-no-unsanitized
 */


export default {
    plugins: ["no-unsanitized"],
    rules: {

        /*
         * The method rule in eslint-plugin-no-unsanitized perform basic security
         * checks for function calls. The idea of these checks is to ensure that
         * certain insecure coding patterns are avoided in your codebase. We
         * encourage developers to use HTML sanitizers or escapers to mitigate
         * those insecure patterns.
         *
         * https://github.com/mozilla/eslint-plugin-no-unsanitized/blob/master/docs/rules/method.md
         */
        "no-unsanitized/method": "error",

        /*
         * The property rule in eslint-plugin-no-unsanitized perform basic security
         * checks for property assignments. The idea of these checks is to ensure
         * that certain insecure coding patterns are avoided in your codebase.
         * We encourage developers to use HTML sanitizers or escapers to mitigate
         * those insecure patterns.
         *
         * https://github.com/mozilla/eslint-plugin-no-unsanitized/blob/master/docs/rules/property.md
         */
        "no-unsanitized/property": "error"

    }
};
