

/*
 * ESLint rules for Node Security
 *
 * https://github.com/nodesecurity/eslint-plugin-security
 */


export default {
    plugins: ["security"],
    rules: {

        /*
         * Detects calls to buffer with noAssert flag set
         *
         * From the Node.js API docs: "Setting noAssert to true skips validation
         * of the offset. This allows the offset to be beyond the end of the Buffer."
         *
         */
        "security/detect-buffer-noassert": "error",

        /*
         * Detects instances of child_process & non-literal exec()
         *
         * https://blog.liftsecurity.io/2014/08/19/Avoid-Command-Injection-Node.js
         */
        "security/detect-child-process": "error",

        /*
         * Detects object.escapeMarkup = false, which can be used with some
         * template engines to disable escaping of HTML entities. This can lead
         * to Cross-Site Scripting (XSS) vulnerabilities.
         *
         * https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
         */
        "security/detect-disable-mustache-escape": "error",

        /*
         * Detects eval(variable) which can allow an attacker to run arbitary
         * code inside your process.
         *
         * http://security.stackexchange.com/questions/94017/what-are-the-security-issues-with-eval-in-javascript
         */
        "security/detect-eval-with-expression": "error",

        /*
         * Detects instances of new Buffer(argument) where argument is any non
         * literal value.
         *
         * There wasn't any documentation on https://github.com/nodesecurity/eslint-plugin-security
         * at the time of writing
         */
        "security/detect-new-buffer": "error",

        /*
         * Detects Express csrf middleware setup before method-override
         * middleware. This can allow GET requests (which are not checked by csrf)
         * to turn into POST requests later.
         *
         * https://blog.liftsecurity.io/2013/09/07/bypass-connect-csrf-protection-by-abusing
         */
        "security/detect-no-csrf-before-method-override": "error",

        /*
         * Detects variable in filename argument of fs calls, which might allow
         * an attacker to access anything on your system.
         *
         * https://www.owasp.org/index.php/Path_Traversal
         */
        "security/detect-non-literal-fs-filename": "error",

        /*
         * Detects RegExp(variable), which might allow an attacker to DOS your
         * server with a long-running regular expression.
         *
         * https://blog.liftsecurity.io/2014/11/03/regular-expression-dos-and-node.js
         */
        "security/detect-non-literal-regexp": "error",

        /*
         * Detects require(variable), which might allow an attacker to load and
         * run arbitrary code, or access arbitrary files on disk.
         *
         * http://www.bennadel.com/blog/2169-where-does-node-js-and-require-look-for-modules.htm
         */
        "security/detect-non-literal-require": "error",

        /*
         * Detects variable[key] as a left- or right-hand assignment operand.
         *
         * Turning this off for now because we like variable[key] too much
         *
         * https://blog.liftsecurity.io/2015/01/14/the-dangers-of-square-bracket-notation/
         */
        "security/detect-object-injection": "off",

        /*
         * Detects insecure comparisons (==, !=, !== and ===), which check input
         * sequentially.
         *
         * https://snyk.io/blog/node-js-timing-attack-ccc-ctf/
         */
        "security/detect-possible-timing-attacks": "error",

        /*
         * Detects if pseudoRandomBytes() is in use, which might not give you
         * the randomness you need and expect.
         *
         * http://stackoverflow.com/questions/18130254/randombytes-vs-pseudorandombytes
         */
        "security/detect-pseudoRandomBytes": "error",

        /*
         * Locates potentially unsafe regular expressions, which may take a very
         * long time to run, blocking the event loop.
         *
         * https://blog.liftsecurity.io/2014/11/03/regular-expression-dos-and-node.js
         */
        "security/detect-unsafe-regex": "error"

    }
};
