

/*
 * Format-message i18n specific rules for ESLint
 *
 * https://www.npmjs.com/package/eslint-plugin-format-message
 */


import fs from "fs";


const settings = {
    "format-message": {
        generateId: "normalized",
        sourceLocale: "en-US"
    }
};


if(fs.existsSync("locale")){
    settings["format-message"].locale = "./locale";
}


export default {
    plugins: ["format-message"],
    rules: {

        /*
         * If a locale is specified in formatMessage calls, it must be a literal
         * string so that the translation can be replaced at build time. Most of
         * the time, no locale should be specified, and the current locale is used.
         *
         * By default this is a warning, since the message can still be translated
         * at run time, if you have configured properly with formatMessage.setup(options).
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#literal-locale
         */
        "format-message/literal-locale": "error",

        /*
         * For the format-message tools to replace messages with their translations
         * at build time, as well as optimize runtime performance, the message
         * pattern must be a string literal.
         *
         * By default this is a warning, since the message can still be translated
         * at run time, if you have configured properly with formatMessage.setup(options).
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#literal-pattern
         */
        "format-message/literal-pattern": "error",

        /*
         * Don't allow empty jsx messages
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-empty-jsx-message
         */
        "format-message/no-empty-jsx-message": "error",

        /*
         * If translation settings are provided, the translation of each messages
         * should be distinct from the default message in the source code. The
         * exception is if the translation locale matches the source locale, then
         * identical translation is allowed. (For example "en-US" and "en-AU" are
         * allowed to be identical to a source in "en-US".)
         *
         * By default this is a warning, since it often means the message wasn't
         * actually translated.
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-identical-translation
         */
        "format-message/no-identical-translation": "error",

        /*
         * The message patterns must be valid ICU Message Format syntax, or the
         * call to formatMessage will throw an error. This rule allows you to fix
         * these errors early.
         *
         * Since these problems will cause an error to be thrown at run time, by
         * default this rule reports an error.
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-invalid-pattern
         */
        "format-message/no-invalid-pattern": "error",

        /*
         * Don't allow invalid plural keywords
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-invalid-plural-keyword
         */
        "format-message/no-invalid-plural-keyword": "error",

        /*
         * Don't allow invalid translate attributes
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-invalid-translate-attribute
         */
        "format-message/no-invalid-translate-attribute": "error",

        /*
         * If translation settings are provided, the translations must be valid
         * ICU Message Format syntax, or the call to formatMessage will throw an error.
         * This rule allows you to fix these errors early.
         *
         * Since these problems will cause an error to be thrown at run time, by
         * default this rule reports an error.
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-invalid-translation
         */
        "format-message/no-invalid-translation": "error",

        /*
         * If a message pattern requires parameters, missing those parameters will
         * cause an error or malformed message at run time. This rule helps you
         * to quickly find and fix these problems.
         *
         * Since these problems can cause errors, by default this rule reports
         * an error.
         *
         * This rule takes an object for an argument. If the object has a truthy
         * allowNonLiteral property, then passing a variable instead of an object
         * literal is assumed to have all the necessary parameters.
         *
         * Parameters support nested data objects. To prevent any issues, it's
         * recommended that you avoid using object keys with . if you're using nested data.
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-missing-params
         */
        "format-message/no-missing-params": [
            "error",
            {
                allowNonLiteral: false
            }
        ],

        /*
         * Require plural keywords
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-missing-plural-keyword
         */
        "format-message/no-missing-plural-keyword": "error",

        /*
         * If translation settings are provided, each locale must have a translation
         * for each message.
         *
         * By default this is a warning, serving as a reminder to ensure all messages
         * get translated.
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-missing-translation
         */
        "format-message/no-missing-translation": "error",

        /*
         * Don't allow top level scoping
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#no-top-scope
         */
        "format-message/no-top-scope": "error",

        /*
         * If translation settings are provided, each translation must include the
         * same placeholders found in the default message pattern found in the source code.
         *
         * Since these problems can cause errors, by default this rule reports an error.
         *
         * https://www.npmjs.com/package/eslint-plugin-format-message#translation-match-params
         */
        "format-message/translation-match-params": "error"

    },
    settings
};
