

/*
 *
 *
 * https://
 */


export default {
    plugins: ["filenames"],
    rules: {

        /*
         * Match the file name against the default exported value in the module.
         * Files that dont have a default export will be ignored. The exports of
         * index.js are matched against their parent directory.
         *
         * This is off for now because it's really hard to do this without jumping
         * through a million hoops and it's not worth the effort.
         *
         * https://www.npmjs.com/package/eslint-plugin-filenames#matching-exported-values-match-exported
         */
        "filenames/match-exported": [
            "off",
            "kebab"
        ],

        /*
         * A rule to enforce a certain file naming convention using a regular expression.
         *
         * The convention can be configured using a regular expression (the default is camelCase.js).
         * Additionally exporting files can be ignored with a second configuration parameter.
         *
         * https://www.npmjs.com/package/eslint-plugin-filenames#consistent-filenames-via-regex-match-regex
         */
        "filenames/match-regex": [
            "error",
            "^[a-z0-9-]+$",
            true
        ],

        /*
         * Having a bunch of index.js files can have negative influence on developer
         * experience, e.g. when opening files by name. When enabling this rule.
         * index.js files will always be considered a problem.
         *
         * This is off for now because we like having index files
         *
         * https://www.npmjs.com/package/eslint-plugin-filenames#dont-allow-indexjs-files-no-index
         */
        "filenames/no-index": "off"

    }
};
