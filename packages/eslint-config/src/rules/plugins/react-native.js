

/*
 * React Native specific linting rules for ESLint. This repository is structured
 * like (and contains code from) the excellent eslint-plugin-react.
 *
 * Everything is off by default because the default linting is assumed to be for
 * a web application
 *
 * https://www.npmjs.com/package/eslint-plugin-react-native
 */


export default {
    plugins: ["react-native"],
    rules: {

        /*
         * Detect color literals in styles
         *
         * https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-color-literals.md
         */
        "react-native/no-color-literals": "off",

        /*
         * Detect JSX components with inline styles that contain literal values
         *
         * https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-inline-styles.md
         */
        "react-native/no-inline-styles": "off",

        /*
         * Detect raw text outside of Text component
         *
         * https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-raw-text.md
         */
        "react-native/no-raw-text": "off",

        /*
         * Detect StyleSheet rules which are not used in your React components
         *
         * https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/no-unused-styles.md
         */
        "react-native/no-unused-styles": "off",

        /*
         * Require style definitions to be sorted alphabetically
         *
         * https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/sort-styles.md
         */
        "react-native/sort-styles": "off",

        /*
         * Enforce using platform specific filenames when necessary
         *
         * https://github.com/intellicode/eslint-plugin-react-native/blob/HEAD/docs/rules/split-platform-components.md
         */
        "react-native/split-platform-components": "off"

    }
};
