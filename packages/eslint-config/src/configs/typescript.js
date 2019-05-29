

import base from "./base";


export default {
    ...base,
    extends: ["../rules/plugins/typescript"].map(require.resolve).concat(base.extends),
    rules: {

        /*
         * Typescript needs unitialed declarations when variables have a type
         * that can be undefined
         */
        "init-declarations": "off",

        /*
         * Use the typescript unused vars check only because it works with
         * imported interfaces
         */
        "no-unused-vars": "off",

        /*
         * Overridden by @typescript-eslint/semi
         */
        semi: "off"

    }
};

